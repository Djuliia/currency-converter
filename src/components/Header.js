import { Suspense } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Loader } from './Loader';
import { selectBaseCurrency } from '../redux/selectors';
import logo from '../images/logo.png';
import { StyledLink } from './Styles/Styles';

export const Header = () => {
  const baseCurrency = useSelector(selectBaseCurrency);

  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Logo"
              style={{ marginRight: '10px', width: '60px' }}
            />
            <Typography variant="h6" style={{ marginRight: '20px' }}>
              <StyledLink
                to="/"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Convert
              </StyledLink>
            </Typography>
            <Typography variant="h6">
              <StyledLink
                to="/rates"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Rates
              </StyledLink>
            </Typography>
          </div>
          <div>
            {baseCurrency && (
              <Typography variant="body1">
                Your base currency: {baseCurrency}
              </Typography>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
