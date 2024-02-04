import React from 'react';
import {
  FullCardWrapper,
  ImgWrapper,
  Img,
  MainText,
  DescriptionWrapper,
  DescriptionText,
  AboutText,
  AboutMoreTitle,
  RentalList,
  RentalItem,
  RentalInfo,
  ButtonLink,
} from './FullCard.styled';
import { useSelector } from 'react-redux';
import { getCars } from '../../redux/selectors';
import getSplitArray from 'helpers/getSplitArray';

const CardFull = ({ id }) => {
  const cars = useSelector(getCars);

  const selectedCars = cars.find((cars) => cars.id === id);

  if (!selectedCars) {
    return <p>Sorry. Something wrong. Try again later!</p>;
  }

  const {
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = selectedCars;

  const spliterForAddress = ', ';
  const addressArray = getSplitArray(address, spliterForAddress);

  const spliterForConditions = '\n';
  const rentalConditionsArray = getSplitArray(
    rentalConditions,
    spliterForConditions,
  );

  const spliterForMinimalAge = ': ';
  const minimalAgeArray = getSplitArray(
    rentalConditionsArray[0],
    spliterForMinimalAge,
  );

  return (
    <FullCardWrapper>
      <div>
        <ImgWrapper>
          <Img src={img} alt={make} title={description} />
        </ImgWrapper>
        <MainText>
          {make}
          <span>&nbsp;{model}</span>,&nbsp;{year}
        </MainText>
        <DescriptionWrapper>
          <DescriptionText>{addressArray[1]}</DescriptionText>
          <DescriptionText>{addressArray[2]}</DescriptionText>
          <DescriptionText>Id: {id}</DescriptionText>
          <DescriptionText>Year: {year}</DescriptionText>
          <DescriptionText>Type: {type}</DescriptionText>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionText>Fuel Consumption: {fuelConsumption}</DescriptionText>
          <DescriptionText>Engine Size: {engineSize}</DescriptionText>
        </DescriptionWrapper>
        <AboutText>{description}</AboutText>
      </div>
      <div>
        <AboutMoreTitle>Accessories and functionalities:</AboutMoreTitle>
        <DescriptionWrapper>
          <DescriptionText>{accessories[0]}</DescriptionText>
          <DescriptionText>{accessories[1]}</DescriptionText>
          <DescriptionText>{accessories[2]}</DescriptionText>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionText>{functionalities[0]}</DescriptionText>
          <DescriptionText>{functionalities[1]}</DescriptionText>
          <DescriptionText>{functionalities[2]}</DescriptionText>
        </DescriptionWrapper>
      </div>
      <div>
        <AboutMoreTitle>Rental Conditions: </AboutMoreTitle>
        <RentalList>
          <RentalItem>
            <RentalInfo>
              {minimalAgeArray[0]}:&nbsp;<span>{minimalAgeArray[1]}</span>
            </RentalInfo>
          </RentalItem>
          <RentalItem>
            <RentalInfo>{rentalConditionsArray[1]}</RentalInfo>
          </RentalItem>
        </RentalList>
        <RentalList>
          <RentalItem>
            <RentalInfo>{rentalConditionsArray[2]}</RentalInfo>
          </RentalItem>
          <RentalItem>
            <RentalInfo>
              Mileage:&nbsp;<span>{mileage}</span>
            </RentalInfo>
          </RentalItem>
          <RentalItem>
            <RentalInfo>
              Price:&nbsp;<span>{rentalPrice}</span>
            </RentalInfo>
          </RentalItem>
        </RentalList>
      </div>
      <ButtonLink href="tel:+380730000000">Rental Car</ButtonLink>
    </FullCardWrapper>
  );
};

export default CardFull;