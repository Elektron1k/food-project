import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../api';
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
      <div className="row">
        <h1>{meal.strMeal}</h1>
        <h4>Category: {meal.strCategory}</h4>
        {meal.strArea && <h4>Area: {meal.strArea}</h4>}
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
              {meal &&
                findInMeal('Ingredient', meal).map((el, index) => (
                  <li className="list-group-item" key={index}>
                    {meal[el]}
                  </li>
                ))}
            </ul>
            <ul className="list-group list-group-flush ul-ingredient">
              <li className="list-group-item list-group-item-secondary text-center">
                Quantity
              </li>
              {meal &&
                findInMeal('Measure', meal).map((el, index) => (
                  <li className="list-group-item text-center" key={index}>
                    {meal[el]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="fs-5">
          <h4 className="instructions-title">Instructions</h4>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default MealPage;
