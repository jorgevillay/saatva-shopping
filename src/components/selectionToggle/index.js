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
  font: colors.white,
  hoverFont: colors.white
}

const SelectionToggle = ({ options, selectedItem, onClickEvent }) => {
  const content = Object.keys(options).map((item, index) => {
    const itemData = options[item];
    const isSelected = selectedItem === itemData;
    const colorConfig = isSelected ? SELECTED_STYLE : TOGGLE_STYLE;

    return <Button key={index} content={itemData.name} colorConfig={colorConfig} onClickEvent={() => onClickEvent(itemData)} />
  });

  return (
    <Container className="selection-toggle">
      {content}
    </Container>
  );
}

export default SelectionToggle;
