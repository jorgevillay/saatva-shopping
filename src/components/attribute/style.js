import styled from '@emotion/styled';
import colors from '../../utils/colors';
import sizes from '../../utils/sizes';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  h5 {
    text-transform: none;
  }

  span {
    color: ${colors.base};
  }

  @media (max-width: ${sizes.tabletEnd}) {
    align-items: baseline;
    margin-bottom: 20px;

    h5 {
      margin: 0;
    }
    
    span {
      font-size: 18px;
    }
  }
`;

export default Container;
