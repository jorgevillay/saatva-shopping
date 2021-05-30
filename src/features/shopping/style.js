import styled from '@emotion/styled';
import sizes from '../../utils/sizes';

export const Container = styled.div`
  padding: 20px 5% 0;
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
    margin-bottom: 35px;
  }

  img {
    display: none;
  }

  h5 {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 16px;
  }

  .selection-toggle {
    margin-bottom: 30px;
  }

  .cart-button {
    margin-top: 50px;
  }

  @media (max-width: ${sizes.tabletEnd}) {
    width: 100%;

    img {
      display: block;
      width: 100%;
      height: 260px;
      object-fit: cover;
      margin-bottom: 20px;
    }

    h5 {
      margin-bottom: 10px;
    }

    .cart-button {
      margin-top: 30px;
    }
  }

  @media (max-width: ${sizes.mobileEnd}) {
    img {
      height: 185px;
      margin-bottom: 10px;
    }
  }
`;
