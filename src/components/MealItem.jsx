import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function MealItem({ strMeal, strMealThumb, idMeal }) {
  const navigate = useNavigate();
  return (
    <Card className="meal-item" border="secondary">
      <Card.Img variant="top" src={strMealThumb} placeholder={strMeal} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Button
          variant="dark"
          className="btn-meal-item"
          onClick={() => navigate(`/meal/${idMeal}`)}
        >
          Go to meal
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MealItem;
