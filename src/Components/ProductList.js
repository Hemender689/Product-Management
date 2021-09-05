import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../Container/actions/productaction";
const ProductList = () => {
  const [searchitem, setSearchItem] = useState("");
  
  const data = useSelector((state) => state.rootReducer.allproducts);
  let flag ;
  const dispatch= useDispatch();
   
  const deleteHandle=(id)=>{
    dispatch(deleteProduct(id));
    
  }
  if( data.length === 0)
  {
    flag = false;
  }
  else{
    flag =true;
  }
  return (
    <div>
      <div className="search-item">
        <form>
          <input
            type="text"
            placeholder="Search Item"
            value={searchitem}
            disabled = { flag ? false : true}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
        </form>
      </div>

   {flag ? (<table
        className="table"
        cellPadding="10px "
        cellSpacing="5px"
        border="1px"
      >
        <thead>
          <tr>
            <th>Key</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
          data.filter((val) => {
              if (searchitem === "") {
                return val
              }
             else if(val.Name.toLowerCase().includes(searchitem.toLowerCase()))
                    return val;
                   
                 return "" ; 
            }).map((prod, key) => {
              return (
                <tr key={Math.random()}>
                  <td>{key+1}</td>
                  <td>{prod.Name}</td>
                  <td>{prod.Description}</td>
                  <td>{ `₹ ${prod.Price}`}</td>
                  <td>{prod.Quantity}</td>
                 <td><Link to={`/edit/${prod.id}`}>
                    <button className = "btn">Edit</button>
                  </Link>
                 <button className='btn' onClick = {()=>{deleteHandle(prod.id)}}>Delete</button></td>
                </tr>
              );
            })}
        </tbody>
      </table>) : ''}
      
      <div></div>
      <Link to="/addproduct">
        <button className='btn'>Add Product</button>
      </Link>
    </div>
  );
};

export default ProductList;
