import React from 'react';
import Filter from 'components/Form/Filter';
import CardList from 'components/CardList/CardList';
import {
  ContainerStyled,
  SectionStyled,
} from 'components/Layout/Layout.styled';

const Catalog = () => {
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
