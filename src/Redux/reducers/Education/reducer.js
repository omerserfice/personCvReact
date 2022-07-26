 const initialState ={
     educationData:[],
 }

 const educationReducers = (state = initialState,action)=>{
     switch (action.type) {
         case "GET_EDUCATION":
             return {...state,educationData:action.allData};
         default:
             return state;
     }
 }

 export default educationReducers;