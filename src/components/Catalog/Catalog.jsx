import React from 'react';
import { useSelector } from 'react-redux';
import { getCars } from '../../redux/selectors';
import Form from 'components/Form/Form';

const Catalog = () => {
  const adverts = useSelector(getCars);
  console.log(adverts)
  return (
<div>
Catalog
<Form />
</div>
  );
};

export default Catalog;