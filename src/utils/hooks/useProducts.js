import { useEffect, useRef, useState } from "react";
import productsData from '../../mocks/en-us/products2.json';


const useProducts = (categories) => {

    const isMounted = useRef(true);

    const [productsState, setProducts] = useState({
        products: productsData.results,
        loading: true,
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {
        setProducts({
            products: [],
            loading: true,
        });
        setTimeout(() => {
            if (categories.length === 0) {
                /* eslint-disable max-len */ 
                (isMounted.current) && setProducts({ products: productsData.results, loading: false });
                return;
            }

            const arrProductos = [];
            categories.forEach(category => {
                const filterProductos = productsData.results.filter(products =>
                    products.data.category.id === category
                );
                arrProductos.push(filterProductos);
            });
            const products = arrProductos.flat();
            (isMounted.current) && setProducts({ products, loading: false });

        }, 2000);
    }, [categories]);

    return {
        productsState,
    }
}

export default useProducts