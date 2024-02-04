import React from 'react';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../redux/selectors';
import { FavoriteListStyled } from './Favorites.styled';
import Card from 'components/Card/Card';
import { nanoid } from 'nanoid';
import {
  ContainerStyled,
  SectionStyled,
} from 'components/Layout/Layout.styled';

const Favorites = () => {
  const favorites = useSelector(getFavorites);
  return (
    <SectionStyled>
      <ContainerStyled>
        <FavoriteListStyled>
          {favorites.map(advertisement => (
            <Card key={nanoid()} advertisement={advertisement} />
          ))}
        </FavoriteListStyled>
      </ContainerStyled>
    </SectionStyled>
  );
};

export default Favorites;
