import { useState } from 'react';
import data from '../../data/mock/mattresses';
import { Container, PictureWrapper, ShoppingWrapper } from './style';
import Header from '../../components/header';
import SelectionToggle from '../../components/selectionToggle';
import Attribute from '../../components/attribute';
import ReviewRating from '../../components/reviewRating';
import Button from '../../components/button';

const Shopping = () => {
  const { mattresses } = data;
  const firstItem = Object.keys(mattresses)[0];
  const [selectedItem, setSelectedItem] = useState(firstItem);
  const [shoppingList, setShoppingList] = useState([]);
  const mattressData = mattresses[selectedItem];

  const onClickCart = (item) => {
    setShoppingList([
      ...shoppingList,
      item
    ]);
  }

  return (
    <>
      <Header hasShoppingCart shoppingList={shoppingList} />
      <Container>
        <PictureWrapper>
          <img src={`/images/${mattressData.imageFileName}`} alt={mattressData.name} />
        </PictureWrapper>
        <ShoppingWrapper>
          <h1>Choose your mattress</h1>
          <h5>Select mattress type</h5>
          <SelectionToggle options={mattresses} selected={selectedItem} onClick={setSelectedItem} />
          <Attribute name={`${mattressData.name} Mattress`} value={mattressData.price} />
          <ReviewRating score={mattressData.reviewRating} />
          <Button className="cart-button" content="Add to Cart" onClickEvent={() => onClickCart(mattressData)} />
        </ShoppingWrapper>
      </Container>
    </>
  );
}

export default Shopping;
