import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;

  button:not(:first-of-type) {
    border-left: none;
    border-radius: 0 3px 3px 0;
  }

  button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
  }

  button:not(:last-of-type) {
    border-radius: 3px 0 0 3px;
  }
`;

export default Container;
