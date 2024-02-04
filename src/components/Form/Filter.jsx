import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCars } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/slice';
import makes from '../../data/makes';
import prices from '../../data/prices';
import {
  ButtonStyled,
  Form,
  Input,
  Label,
  Select,
  SelectPrice,
} from './Filter.styled';
import { nanoid } from 'nanoid';

const Filter = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedMake, setSelectedMake] = useState('Enter the text');
  const [selectedPrice, setSelectedPrice] = useState('To $');

  const handleMakeSelectChange = event => {
    setSelectedMake(event.target.value);
  };

  const handlePriceSelectChange = event => {
    setSelectedPrice(event.target.value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    setFilteredCars(cars.filter(cars => cars.make === selectedMake));
    dispatch(setFilter(filteredCars));
  };

  return (
    <Form onClick={handleOnSubmit}>
      <Label>
        Car brand
        <Select
          name="models"
          value={selectedMake}
          onChange={handleMakeSelectChange}
        >
          <option value="Enter the text">Enter the text</option>
          {makes.map(make => (
            <option key={nanoid()} value={make}>
              {make}
            </option>
          ))}
        </Select>
      </Label>
      <Label>
        Price/ 1 hour
        <SelectPrice
          name="prices"
          value={selectedPrice}
          onChange={handlePriceSelectChange}
        >
          <option value="To $" disabled>
            To $
          </option>
          {prices.map(price => (
            <option key={nanoid()} value={price}>
              {price}
            </option>
          ))}
        </SelectPrice>
      </Label>
      <Label>
        Car mileage / km
        <Input placeholder="From" />
      </Label>
      <Label>
        <Input placeholder="To" />
      </Label>
      <Label></Label>
      <ButtonStyled type="submit">Search</ButtonStyled>
    </Form>
  );
};

export default Filter;
