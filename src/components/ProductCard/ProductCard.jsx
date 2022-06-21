import React from "react";
import Card from "./Card";

const ProductCard = ({ product }) => {
  const { data: productData } = product;

  return (
    <Card>
      <div className="img">
        <img src={productData.mainimage.url} alt="" />
      </div>
      <div className="body">
        <h5>{productData.name}</h5>
        <div className="content">
          <div className="information">
            <h6 className="category"> #{productData.category.slug}</h6>
            <h6 className="price">$
              {productData.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h6>
          </div>
          <br />
          <button type="button" ><i className="fa-solid fa-cart-plus"> </i></button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
