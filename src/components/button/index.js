import Container from './style';
import colors from '../../utils/colors';

const DEFAULT_CONFIG = {
  background: colors.secondary,
  hoverBackground: colors.branding,
  font: colors.white,
  hoverFont: colors.white
}

const Button = ({ content = 'Click me', colorConfig, onClickEvent }) => {
  return (
    <Container config={colorConfig || DEFAULT_CONFIG} onClick={onClickEvent}>
      {content}
    </Container>
  );
}

export default Button;
