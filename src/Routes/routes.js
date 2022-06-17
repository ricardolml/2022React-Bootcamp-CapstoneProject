import { lazy } from "react";
/* eslint-disable max-len */
export const Home = lazy(() => import(/* webpackChunkName: "HomePage"*/ '../pages/home/HomePage'));
const Products = lazy(() => import(/* webpackChunkName: "ProducstList"*/ '../pages/ProductList/ProductListPage'));

export const routes = [
    {
        to: '/home',
        path: 'home',
        Component: Home,
        name: 'Home',
    },
    {
        to: '/products',
        path: 'products',
        Component: Products,
        name: 'Products',
    },
];