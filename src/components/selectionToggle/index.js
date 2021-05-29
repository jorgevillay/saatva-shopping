import Container from './style';
import colors from '../../utils/colors';
import Button from '../button';

const TOGGLE_STYLE = {
  background: colors.white,
  hoverBackground: colors.base,
  border: colors.base,
  font: colors.base,
  hoverFont: colors.white
}

const SelectionToggle = ({ options }) => {
  const content = Object.keys(options).map((item, index) => {
    const text = options[item].name;

    return <Button key={index} content={text} colorConfig={TOGGLE_STYLE} />
  });

  return (
    <Container>
      {content}
    </Container>
  );
}

export default SelectionToggle;
