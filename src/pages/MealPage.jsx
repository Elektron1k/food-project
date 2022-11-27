import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';
function MealPage() {
  const { id } = useParams();
  const [meal, setMeal] = useState({});

  const findInMeal = (name, obj) => {
    const keys = Object.keys(meal);
    return keys.filter((el) => el.includes(name) && obj[el]);
  };

  useEffect(() => {
    getMealById(id).then((data) => {
      setMeal(data.meals[0]);
    });
  }, [id]);

  return (
    <div className="container ">
      {meal.strMeal ? (
        <div className="row">
          <h1>{meal.strMeal}</h1>
          <h4>
            Category:
            <Link
              className="link-secondary"
              to={`/category/${meal.strCategory}`}
            >
              {meal.strCategory}
            </Link>
          </h4>
          <h4>
            Area:
            <Link className="link-secondary" to={`/area/${meal.strArea}`}>
              {meal.strArea}
            </Link>
          </h4>

          <img
            className="img-thumbnail col"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <div className="col w-auto p-3">
            <div className="d-flex">
              <ul className="list-group list-group-flush ul-ingredient">
                <li className="list-group-item list-group-item-secondary">
                  Ingredients
                </li>
                {findInMeal('Ingredient', meal).map(
                  (el, index) =>
                    meal[el].trim() && (
                      <li className="list-group-item" key={index}>
                        {meal[el]}
                      </li>
                    )
                )}
              </ul>
              <ul className="list-group list-group-flush ul-ingredient">
                <li className="list-group-item list-group-item-secondary text-center">
                  Quantity
                </li>
                {findInMeal('Measure', meal).map(
                  (el, index) =>
                    meal[el].trim() && (
                      <li className="list-group-item text-center" key={index}>
                        {meal[el]}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
          <div className="fs-5">
            <h4 className="instructions-title">Instructions</h4>
            <p>{meal.strInstructions}</p>
          </div>
          {meal.strYoutube && (
            <div>
              <h4>Video Recipe</h4>
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
                    -11
                  )}`}
                  title={meal.strMeal}
                ></iframe>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default MealPage;
