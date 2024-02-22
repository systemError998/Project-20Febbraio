import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';

import HomePage from './pages/HomePage';
import SingleArticle from './pages/SingleArticle';
import NotFoundPage from './pages/NotFoundPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/single-article/:id" element={<SingleArticle />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
