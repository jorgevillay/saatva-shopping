import logo from '../../media/images/saatvaLogo.svg';
import Container from './style';
import ShoppingCart from '../shoppingCart';

const Header = ({ hasShoppingCart }) => {
  return (
    <Container>
      <img src={logo} alt="Saatva logo" />
      {hasShoppingCart && <ShoppingCart />}
    </Container>
  );
}

export default Header;
