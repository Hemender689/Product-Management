import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../Container/actions/productaction";

const Edit = () => {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Price, setPrice] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const products = useSelector((state) => state.rootReducer.allproducts);
  const cid = products.find((product) => product.id === parseInt(id));

  useEffect(() => {
    if (cid) {
      setName(cid.Name);
      setDescription(cid.Description);
      setQuantity(cid.Quantity);
      setPrice(cid.Price);
    }
  }, [cid]);

  const addProductHandler = (e) => {
    e.preventDefault();
    const data = {
      id: cid.id,
      Name,
      Description,
      Price,
      Quantity,
    };

    if( !Name || !Description || !Quantity || !Price){
        alert("fill all the fields");
    }
    else if( Price < 0 || Quantity < 0){
        alert("Must be positive");}
      else{  
    dispatch(updateProducts(data));
    history.push("/productList");}
  };

  return (
    <div>
      <div className="home">
        <h1>Edit Product Detials</h1>
      </div>
      <div>
        <form className="form">
          <div className="form-grp">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
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
              min="0"
              onInput="validity.valid||(value='')"
              step="1"
              required
            />
          </div>
          <button onClick={addProductHandler} className="btn">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
