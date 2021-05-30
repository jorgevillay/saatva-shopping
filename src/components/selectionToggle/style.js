import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;

  button:not(:first-of-type) {
    border-left: none;
  }
`;

export default Container;
