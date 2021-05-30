import Container from './style';
import { formatToCurrency } from '../../utils/utils'

const Attribute = ({ name = 'Attribute name', value = 0 }) => {
  const formattedValue = formatToCurrency(value);

  return (
    <Container>
      <h5>{name}</h5>
      <span>{formattedValue}</span>
    </Container>
  );
}

export default Attribute;
