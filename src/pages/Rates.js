import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExchangeRates } from '../redux/operations';
import { selectBaseCurrency, selectRates } from '../redux/selectors';
import { ExchangeRates } from 'components/ExchangeRates';
import { Container } from 'components/Styles/Styles';

const Rates = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectRates);
  const baseCurrency = useSelector(selectBaseCurrency);

  useEffect(() => {
    dispatch(fetchExchangeRates(baseCurrency));
  }, [dispatch, baseCurrency]);

  return <Container>{rates && <ExchangeRates />}</Container>;
};

export default Rates;
