import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getFilteredArea } from '../api';
import MealsList from '../components/MealsList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

function AreaPage() {
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
    getFilteredArea(name).then((data) => {
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
      <Search cb={handleSearch} />
      <h2>{name}`s recipes</h2>
      <hr />
      {!filteredMeals.length ? (
        <Preloader />
      ) : (
        <MealsList meals={filteredMeals} />
      )}
    </>
  );
}

export default AreaPage;
