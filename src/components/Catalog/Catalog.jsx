import React from 'react';
import { useSelector } from 'react-redux';
import { getCars } from '../../redux/selectors';
import Filter from 'components/Form/Filter';
import CardList from 'components/CardList/CardList';
import {
  ContainerStyled,
  SectionStyled,
} from 'components/Layout/Layout.styled';

const Catalog = () => {
  const adverts = useSelector(getCars);
  console.log(adverts);
  return (
    <SectionStyled>
      <ContainerStyled>
        <Filter />
      </ContainerStyled>
      <ContainerStyled>
        <CardList />
      </ContainerStyled>
    </SectionStyled>
  );
};

export default Catalog;
