import styled from '@emotion/styled';
import colors from '../../utils/colors';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  h5 {
    text-transform: none;
  }

  span {
    color: ${colors.base};
  }
`;

export default Container;
