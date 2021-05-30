import Container from './style';
import ShoppingCart from '../shoppingCart';

const Header = ({ hasShoppingCart, shoppingList }) => {
  return (
    <Container>
      <img src="/images/saatvaLogo.svg" alt="Saatva logo" />
      {hasShoppingCart && <ShoppingCart items={shoppingList} />}
    </Container>
  );
}

export default Header;
