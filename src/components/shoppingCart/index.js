import Container from './style';

const shoppingCart = ({ items = [] }) => {
  const itemsCount = items.length;

  return (
    <Container>
      <span className="material-icons-outlined">local_shipping</span>
      <span className="items-badge">{itemsCount}</span>
    </Container>
  );
}

export default shoppingCart;
