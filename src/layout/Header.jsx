import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { getNameAllAreas, getNameAllCategories, getRandomMeal } from '../api';
import Search from '../components/Search';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [randomMeal, setRandomMeal] = useState();

  const navigate = useNavigate();

  const handleSearch = (srt) => {
    navigate(`/meals?s=${srt}`);
  };

  useEffect(() => {
    getNameAllCategories().then((data) => setCategories(data.meals));
    getNameAllAreas().then((data) => setAreas(data.meals));
  }, []);
  useEffect(() => {
    getRandomMeal().then((data) => setRandomMeal(data.meals[0]));
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid fs-5">
          <Link className="navbar-brand fs-4" to="/">
            React Foods
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    {categories.length &&
                      categories.map((category, index) => (
                        <Link
                          key={index}
                          className="dropdown-item"
                          to={`/category/${category.strCategory}`}
                        >
                          {category.strCategory}
                        </Link>
                      ))}
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Areas
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    {areas.length &&
                      areas.map((area, index) => (
                        <Link
                          key={index}
                          className="dropdown-item"
                          to={`/area/${area.strArea}`}
                        >
                          {area.strArea}
                        </Link>
                      ))}
                  </li>
                </ul>
              </li>
              {randomMeal ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={`/meal/${randomMeal.idMeal}`}
                  >
                    Random meal
                  </NavLink>
                </li>
              ) : null}
            </ul>
            <Search cb={handleSearch} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
