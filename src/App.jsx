import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';

import mainRouter from './routers/main-router';
import { RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { mainRoutes } from './routers/main-router';
import BoardLayout from './routes/board/layout';

function renderRoutes(routesObj) {
  return routesObj.map((route) => {
    if (route.children) {
      return (
        <Route
          key={route.path}
          path={route.path}
          index={route.index}
          element={route.element}
        >
          {route.children ? renderRoutes(route.children) : null}
        </Route>
      );
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        index={route.index}
        element={route.element}
      />
    );
  });
}

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>{renderRoutes(mainRoutes)}</Routes>
        <Routes>
          <Route path="/">메인페이지</Route>
          <Route path="/board" element={<BoardLayout />}>
            보드
            <Route>보드 1</Route>
            <Route path="sample">보드 1</Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={mainRouter} />
    </>
  );
}

export default App;
