import React, { useState } from "react";

import { useDispatch } from "react-redux";
import setProducts from "../Container/actions/productaction";
import { useHistory } from "react-router-dom";

const ProductForm = () => {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Price, setPrice] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  // const products = useSelector((state) => state.rootReducer.allproducts);
  const addProductHandler = (e) => {
    e.preventDefault();
    const data = {
      id: Math.floor(Math.random() * 20) * 20,
      Name,
      Description,
      Quantity,
      Price,
    };

    
      dispatch(setProducts(data));
      history.push("/productList");

  };

  return (
    <>
      <div className="home">
        <h1>Add Product</h1>
      </div>

      <div className="form">
        <form onSubmit={addProductHandler}>
          <div className="form-grp">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value) ;
              }}
              value={Name}
              required
            />
          </div>
          <div className="form-grp">
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={Description}
              required
            />
          </div>
          <div className="form-grp">
            <input
              type="number"
              placeholder="Price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              value={Price}
              step = "0.00001"
              min="0" 
              onInput="validity.valid||(value='')"
              required
            />
          </div>
          <div className="form-grp">
            <input
              type="number"
              placeholder="Quantity"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              value={Quantity}
              step = "1"
              min="0" 
              onInput="validity.valid||(value='')"
              required
            />
          </div>
          <div>
            <input type="submit" className="btn" value="Add"></input>
          </div>
        </form>
      </div>
    </>
  );
};
export default ProductForm;
