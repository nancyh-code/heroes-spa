import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../auth';
import { HeroesRoutes } from '../heroes';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
