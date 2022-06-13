import { useEffect, useState } from "react";

const useFilterProducts = (inicialProductosState, categories) => {

    const [productsState, setProducts] = useState({
        products: [],
        loading: true,
    });

    useEffect(() => {
        setProducts({
            products: [],
            loading: true,
        });
        if (categories.length === 0) { 
            setProducts({ products: inicialProductosState, loading: false }); 
            return;
        }

        const arrProductos = [];
        categories.forEach(category => {
            const filterProductos = inicialProductosState.filter(products =>
                products.data.category.id === category
            );
            arrProductos.push(filterProductos);
        });
        const products = arrProductos.flat();

        setTimeout(() => {


            setProducts({
                products,
                loading: false,
            });
        }, 2000);
    }, [categories, inicialProductosState]);



    return {
        productsState,
    }
}

export default useFilterProducts