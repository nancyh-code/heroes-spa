import { Routes, Route, Navigate } from 'react-router-dom';
import { MarvelPage, DcPage, HeroPage, SearchPage } from '../pages';
import { Navbar } from '../../ui';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPage />} />
          <Route path='hero/:id' element={<HeroPage />} />
          <Route path='search' element={<SearchPage />} />
          {/* Search, HeroById*/}
          {/* Esto se usa para establecer el home o la page por defecto */}
          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  );
};
