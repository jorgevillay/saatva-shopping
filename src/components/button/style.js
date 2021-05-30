import styled from '@emotion/styled';

const Container = styled.button`
  width: 100%;
  padding: 10px 2px;
  text-align: center;
  font-size: 16px;
  border: 1px solid ${props => props.config.border || props.config.background};
  background-color: ${props => props.config.background};
  color: ${props => props.config.font};
  transition: background 0.5s, color 0.5s;
  cursor: pointer;
  text-decoration: none;
  border-radius: 3px;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  outline: none;
  transition: 0.2s all;

  &:hover {
    background: ${props => props.config.hoverBackground};
    color: ${props => props.config.hoverFont};
    border-color: ${props => props.config.hoverBorder || props.config.hoverBackground};
  }

  &:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

export default Container;
