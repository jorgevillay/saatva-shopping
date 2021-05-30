import data from '../../data/mock/mattresses';
import { Container } from './style';
import Header from '../../components/header';
import SelectionToggle from '../../components/selectionToggle';
import Attribute from '../../components/attribute';
import ReviewRating from '../../components/reviewRating';
import Button from '../../components/button';

const Shopping = () => {
  return (
    <>
      <Header hasShoppingCart />
      <Container>
        <h1>Choose your mattress</h1>
        <h5>Select mattress type</h5>
        <SelectionToggle options={data.mattresses} />
        <Attribute />
        <ReviewRating />
        <Button content="Add to Cart" />
      </Container>
    </>
  );
}

export default Shopping;
