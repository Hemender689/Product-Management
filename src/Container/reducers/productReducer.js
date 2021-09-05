
const initialState = [];
    
export const productReducer = (state = initialState, action)=>{
    switch (action.type) {
        case "SET_PRODUCT":
             return  [...state ,action.payload]
        

         case "UPDATE_PRODUCT":
         const updatestate = state.map(allproducts => allproducts.id === action.payload.id  ? action.payload : allproducts);
         state = updatestate;
         return state;


        case  "DELETE":
            const del = state.filter(allproducts => allproducts.id !== action.payload ?  allproducts : null);
            state=del;
            return state;

        default:
            return state;
            
    }
}

  