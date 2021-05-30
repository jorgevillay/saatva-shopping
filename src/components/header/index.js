import Container from './style';
import ShoppingCart from '../shoppingCart';

const Header = ({ hasShoppingCart }) => {
  return (
    <Container>
      <img src="/images/saatvaLogo.svg" alt="Saatva logo" />
      {hasShoppingCart && <ShoppingCart />}
    </Container>
  );
}

export default Header;
