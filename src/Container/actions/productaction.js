 const setProducts = (product)=>{
    return{
        type : "SET_PRODUCT",
        payload : product,
    };
}


export const updateProducts = (data) =>{
    return{
        type:"UPDATE_PRODUCT",
        payload: data,
    }

}

export const deleteProduct=(data)=>{
    return{
        type : "DELETE",
        payload: data
    }
}

export default setProducts;