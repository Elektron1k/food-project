import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function CategoryItem({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) {
  const navigate = useNavigate();
  return (
    <Card className="card-item">
      <Card.Img variant="top" src={strCategoryThumb} alt={strCategory} />
      <Card.Body>
        <Card.Title>{strCategory}</Card.Title>
        <Card.Text className="item-text">{strCategoryDescription}</Card.Text>
        <Button
          variant="secondary"
          onClick={() => navigate(`category/${strCategory}`)}
        >
          Go to category
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CategoryItem;
