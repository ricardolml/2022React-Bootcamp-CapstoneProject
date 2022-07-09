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
const SearchProducts = lazy(() =>
  import(
    /* webpackChunkName: "SearchProducts"*/ '../pages/SearchProducts/SearchProductsPage'
  )
);
const Cart = lazy(() =>
  import(/* webpackChunkName: "Cart"*/ '../pages/Cart/CartPage')
);
const Checkout = lazy(() =>
  import(/* webpackChunkName: "Checkout"*/ '../pages/Checkout/CheckoutPage')
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
  {
    to: '/search',
    path: 'search',
    Component: SearchProducts,
    name: 'SearchProduct',
  },
  {
    to: '/cart',
    path: 'cart',
    Component: Cart,
    name: 'Cart',
  },
  {
    to: '/checkout',
    path: 'checkout',
    Component: Checkout,
    name: 'Check Out',
  },
];

const routes = createRoutes(arrRoutes);
export default routes;
