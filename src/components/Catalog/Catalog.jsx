import React from 'react';
import { useSelector } from 'react-redux';
import { getCars } from '../../redux/selectors';

const Catalog = () => {
  const adverts = useSelector(getCars);
  console.log(adverts)
  return (
<div>
Catalog
</div>
  );
};

export default Catalog;