import styled from '@emotion/styled';
import colors from '../../utils/colors';

const Container = styled.div`
  padding-left: 8px;

  .material-icons-outlined {
    font-size: 40px;
    color: ${colors.cart};
  }

  .items-badge {
    background: ${colors.badge};
    color: ${colors.white};
    height: 20px;
    width: 20px;
    line-height: 20px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    margin-left: -45px; 
  }
`;

export default Container;
