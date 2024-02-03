import { Box, Button, Container, Divider } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const navToHomePage = () => {
    navigate('/');
  };
  const navToCatalogPage = () => {
    navigate('/catalog');
  };
  const navToFavoritesPage = () => {
    navigate('/favorites');
  };

  return (
    <>
      <Container
        component="header"
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          padding: '8px 0',
        }}
      >
        <Box component="nav">
          <Button
            sx={{}}
            component="a"
            onClick={navToHomePage}
            type="button"
            size="small"
          >
            Home
          </Button>
          <Button
            sx={{}}
            component="a"
            onClick={navToCatalogPage}
            type="button"
            size="small"
          >
            Catalog
          </Button>
          <Button
            sx={{}}
            component="a"
            onClick={navToFavoritesPage}
            type="button"
            size="small"
          >
            Favorites
          </Button>
        </Box>
      </Container>
      <Divider />
    </>
  );
};

export default Header;
