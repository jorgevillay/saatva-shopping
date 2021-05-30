import Container from './style';
import colors from '../../utils/colors';

const DEFAULT_CONFIG = {
  background: colors.secondary,
  hoverBackground: colors.branding,
  font: colors.white,
  hoverFont: colors.white
}

const Button = ({ className, content = 'Click me', colorConfig, onClickEvent }) => {
  return (
    <Container className={className} config={colorConfig || DEFAULT_CONFIG} onClick={onClickEvent}>
      {content}
    </Container>
  );
}

export default Button;
