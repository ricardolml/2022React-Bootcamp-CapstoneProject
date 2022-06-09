import React from 'react'
import { ContentProductList } from '../../styles';
import styles from '../../styles/styles.module.css';
import HomePage from '../home/HomePage';

const ProductListPage = () => {
    return (
        <ContentProductList>
            <div className={ `${styles['col-2']} slider` }>
                categories
            </div>
            <div className={ `${ styles['col-10'] } productList ` }>
                {/* <HomePage /> */}
            </div>
        </ContentProductList>
    )
}

export default ProductListPage