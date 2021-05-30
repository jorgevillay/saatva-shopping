import styled from '@emotion/styled';
import colors from '../../utils/colors';
import sizes from '../../utils/sizes';

export const Container = styled.div`
  display: flex;

  h6 {
    margin: auto 0;
    padding-left: 15px;
    font-size: 16px;
    font-weight: 100;
  }

  @media (max-width: ${sizes.mobileEnd}) {
    flex-direction: column;
    align-items: center;

    h6 {
      text-align: center;  
    }
  }
`;

export const Ratings = styled.div`
  display: flex;
  align-items: center;
  
  .material-icons-outlined {
    font-size: 38px;
    color: ${colors.base};
    transition: color 0.8s;

    &:nth-of-type(${props => `-n + ${props.score}`}) {
      color: ${colors.secondary};
    }
  }

  @media (max-width: ${sizes.mobileEnd}) {
    .material-icons-outlined {
      font-size: 40px;
    }
  }
`;
