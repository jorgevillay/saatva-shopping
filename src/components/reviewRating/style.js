import styled from '@emotion/styled';
import colors from '../../utils/colors';
import sizes from '../../utils/sizes';

export const Container = styled.div`
  display: flex;

  h6 {
    margin: auto 0;
    padding-left: 10px;
  }

  @media (max-width: ${sizes.tabletEnd}) {
    flex-direction: column;
    align-items: center;

    h6 {
      text-align: center;
      font-size: 16px;
      font-weight: 100;
    }
  }
`;

export const Ratings = styled.div`
  display: flex;
  
  .material-icons-outlined {
    font-size: 35px;
    color: ${colors.base};

    &:nth-of-type(${props => `-n + ${props.score}`}) {
      color: ${colors.secondary};
    }
  }

  @media (max-width: ${sizes.tabletEnd}) {
    .material-icons-outlined {
      font-size: 40px;
    }
  }
`;
