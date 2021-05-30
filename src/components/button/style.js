import styled from '@emotion/styled';
import sizes from '../../utils/sizes';

const Container = styled.button`
  width: 100%;
  padding: 10px 2px;
  text-align: center;
  font-size: 17px;
  border: 1px solid ${props => props.config.border || props.config.background};
  background-color: ${props => props.config.background};
  color: ${props => props.config.font};
  transition: background 0.5s, color 0.5s;
  cursor: pointer;

  &:hover {
    background: ${props => props.config.hoverBackground};
    color: ${props => props.config.hoverFont};
    border-color: ${props => props.config.hoverBorder || props.config.hoverBackground};
  }

  @media (max-width: ${sizes.tabletEnd}) {
    font-size: 16px;
  }
`;

export default Container;
