import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllCategories } from '../api';
import CategoryList from '../components/CategoryList';

import Preloader from '../components/Preloader';
import Search from '../components/Search';

function HomePage() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (srt) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(srt.toLowerCase())
      )
    );
    setSearchParams(`?search=${srt}`);
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        searchParams.get('search')
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(searchParams.get('search'))
            )
          : data.categories
      );
    });
  }, [searchParams]);

  return (
    <>
      <Search cb={handleSearch} />
      {!filteredCatalog ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export default HomePage;
