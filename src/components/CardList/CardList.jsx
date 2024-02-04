import React, { useState } from 'react';
import { getCars, getStatusFilter } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'components/Card/Card';
import { ButtonStyled, CardListStyled } from './CardList.styled';
import { loadMoreCars } from '../../redux/cars/slice';
import { nanoid } from 'nanoid';

const CardList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const filtered = useSelector(getStatusFilter);
  const [page, setPage] = useState(1);

  const itemsPerPage = 12;
  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const visibleCars =
    filtered.length === 0
      ? cars.slice(0, endIdx)
      : filtered.slice(0, endIdx);

  const handleLoadMore = () => {
    dispatch(loadMoreCars(page + 1));
    setPage(page + 1);
  };
  return (
    <CardListStyled>
      {visibleCars.map(advertisement => (
        <Card key={nanoid()} advertisement={advertisement} />
      ))}
      {visibleCars.length < cars.length && (
        <ButtonStyled onClick={handleLoadMore}>Load More</ButtonStyled>
      )}
    </CardListStyled>
  );
};

export default CardList;