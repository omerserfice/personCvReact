
const initialState = {
    certificateData:[]
}

const certificateReducers = (state = initialState,action) => {
       switch (action.type) {
           case "GET_CERTIFICATE":
            return {...state,certificateData:action.allData};
            default:
                return state;
       }
}
export default certificateReducers