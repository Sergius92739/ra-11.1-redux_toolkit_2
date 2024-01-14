import React from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import SearchListPage from './pages/SearchListPage';
import FavoritesPage from './pages/FavoritesPage';
import MovieCard from './components/MovieCard';
import SearchByIdPage from './pages/SearchByIdPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<SearchListPage />} />
          <Route path='search' element={<SearchByIdPage />} />
          <Route path='favourites' element={<FavoritesPage />} />
          <Route path='card/:imdbID' element={<MovieCard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
