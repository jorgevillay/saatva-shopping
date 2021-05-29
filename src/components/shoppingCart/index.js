import Container from './style';

const shoppingCart = ({ items }) => {
  return (
    <Container>
      <span class="material-icons-outlined">local_shipping</span>
      <span class="items-badge">{items}</span>
    </Container>
  );
}

export default shoppingCart;
