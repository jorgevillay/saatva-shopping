import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;

  button:not(:first-child) {
    border-left: none;
  }
`;

export default Container;
