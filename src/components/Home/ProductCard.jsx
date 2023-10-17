import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const ProductCard = ({ product }) => {
  const options = {
    size: "medium",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <div className="des">
        <h5>{product.name}</h5>
        <div className="star">
          <Rating {...options} />{" "}
          <span>({product.numberOfReviews} Reviews)</span>
        </div>
        <h4>{`₹${product.price}`}</h4>
      </div>
      <a href="/#" className="cart">
        <ShoppingCartOutlinedIcon />
      </a>
    </Link>
  );
};

export default ProductCard;
