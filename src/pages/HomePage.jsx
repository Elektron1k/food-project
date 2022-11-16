import { useEffect, useState } from 'react';
import { getAllCategories } from '../api';
import CategoryList from '../components/CategoryList';

import Preloader from '../components/Preloader';

function HomePage() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return <> {!catalog ? <Preloader /> : <CategoryList catalog={catalog} />}</>;
}

export default HomePage;
