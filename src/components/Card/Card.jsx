import React, { useState } from 'react';
import {
  CardWrapper,
  ImgWrapper,
  Img,
  FavoriteImg,
  NoFavoriteImg,
  ButtonFavorite,
  DescriptionWrapper,
  MainTextWrapper,
  MainText,
  InfoWrapper,
  Info,
  NoImage,
  LinkButton,
} from './Card.styled';
import getSplitArray from 'helpers/getSplitArray';
import sprite from 'assets/sprite.svg';
import Modal from '../Modal/Modal';
import FullCard from '../FullCard/FullCard';
import { getFavorites, getCars } from '../../redux/selectors';
import { addFavorite, deleteFavorite } from '../../redux/favorite/operations';
import { useDispatch, useSelector } from 'react-redux';

const Card = ({ advertisement }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = advertisement;
  const favorites = useSelector(getFavorites);
  const adverts = useSelector(getCars);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  let spliterForAddress = ', ';
  let addressArray = getSplitArray(address, spliterForAddress);

  const handleFavorite = () => {
    const favorite = favorites.find(object => {
      return object.id === id;
    });
    const advert = adverts.find(object => object.id === id);
    if (!favorite) {
      dispatch(addFavorite(advert));
    } else {
      dispatch(deleteFavorite(favorite._id));
    }
  };
  const isFavorite = favorites.some(object => object.id === id);
  return (
    <CardWrapper>
      <ImgWrapper>
        <Img src={img} loading="lazy" alt={make} title={description} />
        <NoImage>
          <use href={`${sprite}#icon-car`} />
        </NoImage>
      </ImgWrapper>

      <ButtonFavorite type="button" onClick={handleFavorite}>
        {isFavorite ? (
          <FavoriteImg>
            <use href={`${sprite}#icon-favorite`} />
          </FavoriteImg>
        ) : (
          <NoFavoriteImg>
            <use href={`${sprite}#icon-nofavorite`} />
          </NoFavoriteImg>
        )}
      </ButtonFavorite>
      <DescriptionWrapper>
        <MainTextWrapper>
          <MainText>
            {make}
            {model === 'Enclave' || model === 'XC90' || model === 'XC60' ? (
              <span>&nbsp;{model}</span>
            ) : null}
            ,&nbsp;{year}
          </MainText>
          <MainText>{rentalPrice}</MainText>
        </MainTextWrapper>
        <InfoWrapper>
          <Info>{addressArray[1]}</Info>
          <Info>{addressArray[2]}</Info>

          {rentalCompany === 'Premium Auto Rentals' ? (
            <Info>Auto Rentals</Info>
          ) : (
            <Info>{rentalCompany}</Info>
          )}

          {id === '9587' || id === '9597' || id === '9598' ? null : (
            <Info>Premium</Info>
          )}
        </InfoWrapper>
        <InfoWrapper>
          <Info>{type}</Info>
          <Info>{model}</Info>
          <Info>{id}</Info>
          {functionalities[0] === 'Power liftgate' ? (
            <Info>Power liftgate</Info>
          ) : (
            <Info>{accessories[2]}</Info>
          )}
        </InfoWrapper>
      </DescriptionWrapper>
      <LinkButton onClick={toggleModal}>Learn More</LinkButton>
      {showModal && (
        <Modal onClick={toggleModal}>
          <FullCard id={id} />
        </Modal>
      )}
    </CardWrapper>
  );
};

export default Card;
