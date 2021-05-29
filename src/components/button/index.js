import Container from './style';

const Button = ({ content, colorConfig, onClickEvent }) => {
  return (
    <Container config={colorConfig} onClick={onClickEvent}>
      {content}
    </Container>
  );
}

export default Button;
