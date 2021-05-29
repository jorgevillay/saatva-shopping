import styled from '@emotion/styled';

const Container = styled.button`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  font-size: 17px;
  border: 1px solid ${props => props.config.border || props.config.background};
  background-color: ${props => props.config.background};
  color: ${props => props.config.font};
  transition: background 0.5s, color 0.5s;

  &:hover {
    background: ${props => props.config.hoverBackground};
    color: ${props => props.config.hoverFont};
  }
`;

export default Container;
