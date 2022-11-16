import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MealItem from './MealItem';

function MealsList({ meals }) {
  return (
    <>
      <Row xs={1} sm={2} md={3} xl={4} xxl={5} className="g-2">
        {Array.from(meals).map((meal, idx) => (
          <Col key={idx}>
            <MealItem key={meal.idMeal} {...meal} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MealsList;
