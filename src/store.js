import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
// import rootReducer from "./reducers";
import dataReducer from "./reducers";

export const fetchData = () => {
    return async (dispatch) => {
        dispatch({ type: "FETCH_DATA_REQUEST" });

        try {
           const response = await fetch("https://dummyjson.com/products") 
           const data = await response.json();
           const products = data.products
           console.log(data.products)
           dispatch({ type: "FETCH_DATA_SUCCESS", payload: products })
        } catch (error){
            dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message })
        }
    }
}

// const initialState = {
//     loading: false,
//     data: [],
//     error: null,
// }

// const dataReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "FETCH_DATA_REQUEST":
//             return { ...state, loading: true, error: null  }
//         case "FETCH_DATA_SUCCESS":
//             return { ...state, loading: false, data: action.payload }
//         case "FETCH_DATA_FAILURE":
//             return {...state, loading: false, error: action.payload}
//         default:
//             return state;
//     }
// }



// export default dataReducer;

const store = createStore(dataReducer, applyMiddleware(thunk))

export default store