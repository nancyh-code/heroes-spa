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
          <Route path='search' element={<HeroPage />} />
          <Route path='hero' element={<SearchPage />} />
          {/* Search, HeroById*/}
          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  );
};
