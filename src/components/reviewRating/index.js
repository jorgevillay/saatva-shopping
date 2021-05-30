import { Container, Ratings } from './style';

const ReviewRating = ({ score = 0, description }) => {
  const ratingValue = Math.round(score);
  const defaultDescription = `Rated ${ratingValue} of 5 beds according to our ranking for a great night of sleep`;

  return (
    <Container>
      <Ratings score={ratingValue}>
        <span className="material-icons-outlined">bed</span>
        <span className="material-icons-outlined">bed</span>
        <span className="material-icons-outlined">bed</span>
        <span className="material-icons-outlined">bed</span>
        <span className="material-icons-outlined">bed</span>
      </Ratings>
      <h6>{defaultDescription || description}</h6>
    </Container>
  );
}

export default ReviewRating;
