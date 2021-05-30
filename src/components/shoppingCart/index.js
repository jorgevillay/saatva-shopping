import { useContext } from 'react';
import ShoppingCartContext from '../../context/shoppingCart';
import Container from './style';

const ShoppingCart = ({ customItems }) => {
  const items = useContext(ShoppingCartContext);
  const itemsList = customItems || items;
  const itemsCount = itemsList.length;

  return (
    <Container>
      <span className="material-icons-outlined">local_shipping</span>
      <span className="items-badge">{itemsCount}</span>
    </Container>
  );
}

export default ShoppingCart;
