import styled from '@emotion/styled';
import colors from '../../utils/colors';
import sizes from '../../utils/sizes';

export const Container = styled.div`
  background-color: ${colors.background};
  padding: 20px 5% 40px;
  display: flex;

  @media (max-width: ${sizes.tabletEnd}) {
    flex-direction: column-reverse;
  }
`;

export const PictureWrapper = styled.div`
  width: 52%;
  margin-right: 3%;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }

  @media (max-width: ${sizes.tabletEnd}) {
    display: none;
  }
`;

export const ShoppingWrapper = styled.div`
  width: 45%;

  h1 {
    margin-bottom: 30px;
  }

  img {
    display: none;
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

  @media (max-width: ${sizes.tabletEnd}) {
    width: 100%;

    img {
      display: block;
      width: 100%;
      height: 185px;
      object-fit: cover;
      margin-bottom: 10px;
    }

    h5 {
      font-size: 16px;
      margin-bottom: 10px;
    }

    .cart-button {
      margin-top: 30px;
    }
  }
`;
