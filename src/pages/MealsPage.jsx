import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMealByName } from '../api';
import MealsList from '../components/MealsList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

function MealsPage() {
  const [meals, setMeals] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (srt) => {
    setSearchParams(`?s=${srt}`);
  };

  useEffect(() => {
    getMealByName(searchParams.get('s') ? searchParams.get('s') : '').then(
      (data) => {
        setMeals(data.meals);
      }
    );
    console.log(searchParams.get('s'));
  }, [searchParams]);

  return (
    <>
      <div className="my-4">
        <Search cb={handleSearch} />
      </div>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  );
}

export default MealsPage;
