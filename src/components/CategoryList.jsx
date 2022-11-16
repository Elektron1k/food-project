import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Preloader from './Preloader';
import CategoryItem from './CategoryItem';

function CategoryList({ catalog }) {
  return (
    <>
      {!catalog.length ? (
        <Preloader />
      ) : (
        <Row xs={1} sm={2} md={3} xl={4} xxl={5} className="g-2">
          {Array.from(catalog).map((category, idx) => (
            <Col key={idx}>
              <CategoryItem key={category.idCategory} {...category} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default CategoryList;
