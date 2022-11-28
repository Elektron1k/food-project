import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import MealsList from '../components/MealsList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

function CategoryPage() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (srt) => {
    setFilteredMeals(
      meals.filter((item) =>
        item.strMeal.toLowerCase().includes(srt.toLowerCase())
      )
    );
    setSearchParams(`?search=${srt}`);
  };

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);

      setFilteredMeals(
        searchParams.get('search')
          ? data.meals.filter((item) =>
              item.strMeal.toLowerCase().includes(searchParams.get('search'))
            )
          : data.meals
      );
    });
  }, [name, searchParams]);

  return (
    <>
      <div className="my-4">
        <Search cb={handleSearch} />
      </div>
      <h2>Recipes in category: {name}</h2>
      <hr />
      {!filteredMeals.length ? (
        <Preloader />
      ) : (
        <MealsList meals={filteredMeals} />
      )}
    </>
  );
}

export default CategoryPage;
