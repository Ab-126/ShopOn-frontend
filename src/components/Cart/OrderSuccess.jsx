import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./OrderSuccess.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <div className="checkIconContainer">
        <CheckCircleIcon />
      </div>
      <Typography>Your Order has been Placed successfully</Typography>
      <Link to="/orders">View Order</Link>
    </div>
  );
};

export default OrderSuccess;
