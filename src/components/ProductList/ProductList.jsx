import React from 'react'
import Card from '../ProductCard/Card';
import ProductCard from '../ProductCard/ProductCard';
import ProductListStyle from './ProductListStyle'

const ProductList = ({ productsList, title, setShowHomePage, viewAll }) => {
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
                {
                    viewAll &&
                    (
                        <Card className='viewAll' onClick={() => setShowHomePage(false)}>
                            <i className="fa-solid fa-3x fa-angles-right"> </i>
                            <label> View all products </label>
                        </Card>
                    )
                }
            </div>

        </ProductListStyle>
    )
}

export default ProductList