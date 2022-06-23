import { lazy } from 'react';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import { createRoutes } from '../utils/routesCreate';

const Home = lazy(() =>
  import(/* webpackChunkName: "HomePage"*/ '../pages/home/HomePage')
);
const ProductsLayout = lazy(() =>
  import(/* webpackChunkName: "ProducstList"*/ '../layout/ProductsLayout')
);
const ProductList = lazy(() =>
  import(
    /* webpackChunkName: "ProducstList"*/ '../pages/ProductList/ProductListPage'
  )
);

const arrRoutes = [
  {
    to: '/',
    path: '',
    Component: Home,
    name: 'Home',
  },
  {
    to: '/home',
    path: 'home',
    Component: Home,
    name: 'Home',
  },
  {
    to: '/products',
    path: 'products',
    Component: ProductsLayout,
    name: 'Products',
    childs: [
      {
        to: '/products/',
        path: '',
        Component: ProductList,
        name: 'Products List',
      },
      {
        to: '/products/:productID',
        path: ':productID',
        Component: ProductDetail,
        name: 'Product Detail',
      },
    ],
  },
];

const routes = createRoutes(arrRoutes);
export default routes;
