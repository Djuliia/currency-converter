import { useSelector } from 'react-redux';
import {
  selectBaseCurrency,
  selectRates,
  selectRatesError,
  selectRatesLoading,
} from '../redux/selectors';
import { Loader } from './Loader';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export const ExchangeRates = () => {
  const rates = useSelector(selectRates);
  const baseCurrency = useSelector(selectBaseCurrency);
  const ratesLoading = useSelector(selectRatesLoading);
  const ratesError = useSelector(selectRatesError);

  return (
    <div style={{ marginTop: '20px' }}>
      <Typography variant="h3" gutterBottom>
        Exchange Rates
      </Typography>
      {ratesLoading && <Loader />}
      {ratesError && (
        <Typography variant="body1" color="error">
          Error: {ratesError}
        </Typography>
      )}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#1894EE' }}>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: '#fff', fontSize: '1.2rem' }}
              >
                Currency
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: '#fff', fontSize: '1.2rem' }}
              >
                Exchange Rate
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(rates).map(([currency, rate]) => (
              <TableRow key={currency}>
                <TableCell align="center" sx={{ fontSize: '1rem' }}>
                  {currency}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: '1rem' }}
                >{`${1} ${baseCurrency} = ${rate} ${currency}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
