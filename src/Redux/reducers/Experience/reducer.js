 const initialState = {
     experienceData:[],

 }

 const experienceReducers = (state=initialState,action) => {
     
    switch (action.type) {
        case "GET_EXPERIENCE":
            return { ...state, experienceData: action.allData };
        default:
            return state;
    }

 }
 
 export default experienceReducers;