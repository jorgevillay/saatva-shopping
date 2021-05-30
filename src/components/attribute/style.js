import styled from '@emotion/styled';
import colors from '../../utils/colors';
import sizes from '../../utils/sizes';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h5 {
    text-transform: none;
      margin: 0;
  }

  span {
    color: ${colors.base};
  }

  @media (max-width: ${sizes.tabletEnd}) {   
    margin-bottom: 10px;

    span {
      font-size: 18px;
    }
  }

  @media (max-width: ${sizes.mobileEnd}) {   
    margin-bottom: 20px;
  }
`;

export default Container;
