import React from "react";

/* Product component */
const Product = product => {
  return (
    <div className="col-sm-3">
      <div
        className="card"
        key={product.product.id}
        style={{ width: "18rem", height: "35rem" }}>
        <div className="mb-4">
          <div className="card-img-top">
            <img
              src={product.product.image}
              className="img-fluid"
              alt="lambo"></img>
          </div>
        </div>
        <div className="card-body">
          <p className="card-title product-title">{product.product.name}</p>
          <div className="card-title content">
            {product.product.short_description}
            <br></br>
          </div>
          <div className="card-title content">
            Price: {product.product.cost} $<br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
