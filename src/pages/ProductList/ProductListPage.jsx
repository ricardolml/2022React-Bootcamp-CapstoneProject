import React, { useEffect, useState } from 'react'
import { ContentProductList } from '../../styles';
import categoriesData from '../../mocks/en-us/product-categories.json';
import productsData from '../../mocks/en-us/featured-products.json';
import { Category, ProductList } from '../../components';
const ProductListPage = () => {

    const categoriesArr = categoriesData.results.map(category => ({
        ...category,
        selected: false,
    }));

    const [categories, setCategories] = useState(categoriesArr);
    const [categoriesSelect, setCategoriesSelect] = useState([]);
    const [products, setProducts] = useState([]);


    const listCategories = categories.map((category, index) => (
        <li
            key={category.id}
            className={category.selected ? 'active' : ''}
            onClick={() => handleSelectCategory(category.id, index)}
        >
            <Category category={category} />
        </li>
    ));

    // const filter = () => {
    //     if (categoriesSelect.length === 0) { setProducts(productsData.results); return; }
    //     const arrProductos = [];
    //     categoriesSelect.forEach(category => {
    //         const filterProductos = productsData.results.filter(products =>
    //             products.data.category.id === category
    //         );
    //         arrProductos.push(filterProductos);
    //         console.log(filterProductos);
    //     });
    //     setProducts(arrProductos.flat());
    // }

    useEffect(() => {
        if (categoriesSelect.length === 0) { setProducts(productsData.results); return; }
        const arrProductos = [];
        categoriesSelect.forEach(category => {
            const filterProductos = productsData.results.filter(products =>
                products.data.category.id === category
            );
            arrProductos.push(filterProductos);
            console.log(filterProductos);
        });
        setProducts(arrProductos.flat());
    }, [categoriesSelect])


    const handleSelectCategory = (id, index) => {
        const newListCategories = [...categories];
        newListCategories[index].selected = !newListCategories[index].selected;
        setCategories(newListCategories);

        if (newListCategories[index].selected) {
            setCategoriesSelect([...categoriesSelect, id]);
            return;
        }

        const newArreCategories = categoriesSelect.filter((idCategory) => idCategory !== id);
        setCategoriesSelect(newArreCategories);
    }
    
    return (
        <ContentProductList>
            <div className={`slider`}>
                <div className='categories'>
                    Categories
                    <ul>
                        {listCategories}
                    </ul>
                </div>
            </div>
            <div className={`productList `}>
                <ProductList productsList={products} title='Products' />
            </div>
        </ContentProductList>
    )
}

export default ProductListPage