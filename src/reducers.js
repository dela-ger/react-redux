// import { combineReducers } from 'redux';


// const INCREMENT = 'INCREMENT'; 
// const DECREMENT = 'DECREMENT'; 
// const RESET = 'RESET'; 
// const SET_COUNT = 'SET_COUNT';


// export const increment = () => ({ type: INCREMENT }); 
// export const decrement = () => ({ type: DECREMENT }); 
// export const reset = () => ({ type: RESET }); 
// export const setCount = (value) => ({ type: SET_COUNT, payload: value });


// const initialCounterState = { 
//     count: 0
// }

// const counterReducer = (state = initialCounterState, action) => { 
//     switch (action.type) {
//         case INCREMENT: 
//          return { ...state, count: state.count + 1 }; 
//         case DECREMENT: 
//          return { ...state, count: state.count - 1 }; 
//         case RESET: 
//          return { ...state, count: 0 }; 
//         case SET_COUNT: 
//          return { ...state, count: action.payload }; 
//         default: 
//          return state; 
//     } 
// };

// const rootReducer = combineReducers({
//     counter: counterReducer
// })

// export default rootReducer;