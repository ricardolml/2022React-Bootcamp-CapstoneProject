import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Header } from '../components';
// import LoadingSuspense from '../components/Loading/LoadingSuspense';
import { Container, GlobalStyle } from '../styles';
import { routes, Home } from './routes';

const AppRouter = () => {
  return (
    <Suspense fallback={<>...</>}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Container>
          <Routes>
            <Route index element={<Home />} />
            {routes.map(({ path, Component, to }) => (
              <Route key={to} path={path} element={<Component />} />
            ))}
            <Route path='*' element={<Navigate to={'/'} replace />} />
            {/* <Route path="/home" element={<HomePage />} /> */}
            {/* <Route path="/products" element={<ProductListPage />}> */}
            {/* <Route path=":productID" element={<Team />} /> */}
            {/* </Route> */}
          </Routes>
        </Container>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
