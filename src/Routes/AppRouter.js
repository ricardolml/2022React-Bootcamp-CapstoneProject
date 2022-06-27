import React, { Suspense } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Footer, Header } from '../components';
import LoadingSuspense from '../components/Loading/LoadingSuspense';
import { Container, GlobalStyle } from '../styles';
import routes from './routes';

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingSuspense />}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Container>
          <Routes>{routes}</Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
