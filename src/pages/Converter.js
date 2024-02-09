import {
  selectConversionError,
  selectConversionLoading,
  selectConvertedCurrency,
} from '../redux/selectors';
import { Form } from '../components/Form';
import { useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { Container } from 'components/Styles/Styles';

const Converter = () => {
  const convertedCurrency = useSelector(selectConvertedCurrency);
  const conversionLoading = useSelector(selectConversionLoading);
  const conversionError = useSelector(selectConversionError);

  return (
    <Container style={{ flexDirection: 'column', minHeight: '500px' }}>
      <Form />
      {conversionLoading && <Loader />}
      {conversionError && <p>Error: {conversionError}</p>}
      {convertedCurrency && !conversionLoading && !conversionError && (
        <p>
          Converted currency:{' '}
          <span style={{ color: '#1976d2', fontWeight: '600' }}>
            {convertedCurrency}
          </span>
        </p>
      )}
    </Container>
  );
};

export default Converter;
