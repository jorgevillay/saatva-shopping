import styled from '@emotion/styled';
import colors from '../../utils/colors';

const Container = styled.div`
  width: 40px;
  padding-left: 8px;

  @keyframes addItemEffect {
    0% {
      transform: scale(1.0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1.0);
    }
  }

  .material-icons-outlined {
    font-size: 40px;
    color: ${colors.base};
  }

  .items-badge {
    background: ${colors.branding};
    color: ${colors.white};
    height: 20px;
    width: 20px;
    line-height: 20px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    margin-left: -45px;
    animation: addItemEffect 2s;
  }
`;

export default Container;
