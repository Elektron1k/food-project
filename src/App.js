import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import AreaPage from './pages/AreaPage';
import CategoryPage from './pages/CategoryPage';
import HomePage from './pages/HomePage';
import MealPage from './pages/MealPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="category/:name" element={<CategoryPage />} />
            <Route path="area/:name" element={<AreaPage />} />
            <Route path="meal/:id" element={<MealPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
