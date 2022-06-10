import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import ProductListStyle from './ProductListStyle'

const ProductList = ({ productsList, title }) => {
    const products = productsList.map(product => (
        <div key={product.id}>
            <ProductCard product={product} />
        </div>
    ));
    return (
        <ProductListStyle>
            <h2>{title}</h2>
            <hr />
            <div className='content'>
                {products}
            </div>
        </ProductListStyle>
    )
}

export default ProductList