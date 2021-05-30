import styled from '@emotion/styled';
import colors from '../../utils/colors';

export const Container = styled.div`
  background-color: ${colors.background};
  padding: 20px 5% 40px;
  display: flex;
`;

export const PictureWrapper = styled.div`
  width: 52%;
  margin-right: 3%;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
`;

export const ShoppingWrapper = styled.div`
  width: 45%;

  h1 {
    margin-bottom: 30px;
  }

  h5 {
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .selection-toggle {
    margin-bottom: 20px;
  }

  .cart-button {
    margin-top: 50px;
  }
`;
