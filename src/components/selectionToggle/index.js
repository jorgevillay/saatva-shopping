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

const SELECTED_STYLE = {
  background: colors.base,
  hoverBackground: colors.base,
  border: colors.base,
  font: colors.white,
  hoverFont: colors.white
}

const SelectionToggle = ({ options, selected, onClick }) => {
  const content = Object.keys(options).map((item, index) => {
    const text = options[item].name;
    const isSelected = selected === item;
    const config = isSelected ? SELECTED_STYLE : TOGGLE_STYLE;

    return <Button key={index} content={text} colorConfig={config} onClickEvent={() => onClick(item)} />
  });

  return (
    <Container className="selection-toggle">
      {content}
    </Container>
  );
}

export default SelectionToggle;
