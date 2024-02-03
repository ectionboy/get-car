import React from 'react';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../redux/selectors';

const Favorites = () => {
  const favorites = useSelector(getFavorites);
  console.log(favorites)
  return (
<div>
Favorites
</div>
  );
};

export default Favorites;