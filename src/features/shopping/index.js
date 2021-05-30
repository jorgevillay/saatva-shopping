import { useState } from 'react';
import data from '../../data/mock/mattresses';
import ShoppingCartContext from '../../context/shoppingCart';
import { Container, PictureWrapper, ShoppingWrapper } from './style';
import Header from '../../components/header';
import SelectionToggle from '../../components/selectionToggle';
import Attribute from '../../components/attribute';
import ReviewRating from '../../components/reviewRating';
import Button from '../../components/button';

const Shopping = () => {
  const { mattresses } = data;
  const firstItem = Object.keys(mattresses)[0];
  const [selectedItem, setSelectedItem] = useState(mattresses[firstItem]);
  const [shoppingList, setShoppingList] = useState([]);
  const addCartItem = (item) => {
    setShoppingList([
      ...shoppingList,
      item
    ]);
  }

  return (
    <ShoppingCartContext.Provider value={shoppingList}>
      <Header hasShoppingCart />
      <Container>
        <PictureWrapper>
          <img src={`/images/${selectedItem.imageFileName}`} alt={selectedItem.name} />
        </PictureWrapper>
        <ShoppingWrapper>
          <h1>Choose your mattress</h1>
          <img src={`/images/${selectedItem.imageFileName}`} alt={selectedItem.name} />
          <h5>Select mattress type</h5>
          <SelectionToggle options={mattresses} selectedItem={selectedItem} onClickEvent={setSelectedItem} />
          <Attribute name={`${selectedItem.name} Mattress`} value={selectedItem.price} />
          <ReviewRating score={selectedItem.reviewRating} />
          <Button className="cart-button" content="Add to Cart" onClickEvent={() => addCartItem(selectedItem)} />
        </ShoppingWrapper>
      </Container>
    </ShoppingCartContext.Provider>
  );
}

export default Shopping;
