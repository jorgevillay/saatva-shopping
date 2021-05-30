import styled from '@emotion/styled';
import colors from '../../utils/colors';

export const Container = styled.div`
  display: flex;

  h6 {
    margin: auto 0;
    padding-left: 10px;
  }
`;

export const Ratings = styled.div`
  .material-icons-outlined {
    font-size: 40px;
    color: ${colors.base};

    &:nth-of-type(${props => `-n + ${props.score}`}) {
      color: ${colors.secondary};
    }
  }
`;
