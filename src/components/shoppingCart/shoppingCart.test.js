import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ShoppingCart from './index';
import ShoppingCartContext from '../../context/shoppingCart';

const TEST_ITEM = {
  'regular': {
    'name': 'Saatva Regular',
    'price': 123,
    'reviewRating': 4.0,
    'imageFileName': 'regular-carousel.jpg'
  }
}

const renderShoppingCart = (items) => {
  return render(
    <ShoppingCartContext.Provider value={items}>
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
}

test('renders empty shopping cart', () => {
  renderShoppingCart([]);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('renders one element on the shopping cart', () => {
  renderShoppingCart([TEST_ITEM]);
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('renders five elements on the shopping cart', () => {
  renderShoppingCart([TEST_ITEM, TEST_ITEM, TEST_ITEM, TEST_ITEM, TEST_ITEM]);
  expect(screen.getByText('5')).toBeInTheDocument();
});
