import React from "react";
import { Link } from "react-router-dom";
// import {Link} from  'react-router-dom'; 

const Home = () => {
  return (
    <div>
      <div className = "home">
         <h1>Welcome To Product Inventory Management </h1>
      </div>
      <div>
        <Link to='/addproduct'>
        <button className = "btn">Add Product</button>
        </Link>
     </div>
     
     </div>
  );
};

export default Home;
