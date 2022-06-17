import React from 'react'
import Pagination from '../Pagination/Pagination';
import Card from '../ProductCard/Card';
import ProductCard from '../ProductCard/ProductCard';
import ProductListStyle from './ProductListStyle'
import { useNavigate } from "react-router-dom";

const ProductList = ({ productsList, title, viewAll }) => {
    const navigate = useNavigate();

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
                        <Card 
                            className='viewAll' 
                            onClick={() => navigate('../products', { replace: true }) }
                        >
                            <i className="fa-solid fa-3x fa-angles-right"> </i>
                            <label> View all products </label>
                        </Card>
                    )
                }
            </div>
            {
                !viewAll &&
                (
                    <div className='pagination'>
                        <Pagination numPages={5} />
                    </div>
                )
            }
            
        </ProductListStyle>
    )
}

export default ProductList