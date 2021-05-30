import styled from '@emotion/styled';
import colors from '../../utils/colors';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 5%;
  border-bottom: 1px solid ${colors.base};

  img {
    width: 100px;
  }
`;

export default Container;
