import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Store from './pages/Store';
import { Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Homepage from './pages/Homepage';
import Favourites from './pages/Favourites';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import CategoryPage from './pages/CategoryPage';
import { FavouritesProvider } from './context/FavouritesContext';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/store' element={<Store />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/en_us/search-results.html' element={<Search />} />
        <Route path='/categories/:id/:id/:id' element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default App;
