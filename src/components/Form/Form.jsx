import { Box, Button, FormControl, InputBase, InputLabel, MenuItem, Select, TextField, styled,  } from '@mui/material'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import makes from '../../data/makes.json';
import prices from '../../data/prices.json';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

const Form = () => {
    const [selectedMake, setSelectedMake] = useState('Enter the text');
    const [selectedPrice, setSelectedPrice] = useState('To $');

console.log(selectedMake)
console.log(selectedPrice)


    const handleMakeSelectChange = event => {
        setSelectedMake(event.target.value);
      };
      const handlePriceSelectChange = event => {
        setSelectedPrice(event.target.value);
      };

  return (
    <>
    <Box sx={{ minWidth: 320 }} component="form">
    <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="models-select-label">Car brand</InputLabel>
        <Select
        sx={{ minWidth: 320 }}
          labelId="models-select-label"
          id="models-select"
          value={selectedMake}
          onChange={handleMakeSelectChange}
          input={<BootstrapInput />}
          renderValue={(selected) => {
            if (selected === 'Enter the text') {
              return <em>Enter the text</em>;
            }
            return selected;

          }}
        > 
  <MenuItem disabled value="">
            <em>Enter the text</em>
          </MenuItem>
        {makes.map(make => (
            <MenuItem key={nanoid()} value={make}>
              {make}
            </MenuItem>
          ))}
        </Select>
        </FormControl>





        <FormControl sx={{ m: 1 }} variant="standard">


        <InputLabel id="prices-select-label">Price/ 1 hour</InputLabel>
        <Select
        sx={{ minWidth: 320 }}
          labelId="prices-select-label"
          id="prices-select"
          value={selectedPrice}
          onChange={handlePriceSelectChange}
          input={<BootstrapInput />}
          renderValue={(selected) => {
            if (selected === 'Enter the text') {
              return <em>To $</em>;
            }
            return selected;

          }}
        > 
  <MenuItem disabled value="">
            <em>To $</em>
          </MenuItem>
        {prices.map(make => (
            <MenuItem key={nanoid()} value={make}>
              {make}
            </MenuItem>
          ))}
        </Select>
          
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">


      <TextField
      
          id="mileage-input-from"
          label="Сar mileage / km"
          type="number"
        />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="standard">


<TextField

    id="mileage-input-to"
    label="Сar mileage / km"
    type="number"
  />
  </FormControl>
        <Button variant="contained" type="submit">Search</Button>

  </Box>
  </>)
}

export default Form