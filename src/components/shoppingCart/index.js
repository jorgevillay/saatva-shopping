import Container from './style';

const shoppingCart = ({ items }) => {
  return (
    <Container>
      <span className="material-icons-outlined">local_shipping</span>
      <span className="items-badge">{items}</span>
    </Container>
  );
}

export default shoppingCart;
