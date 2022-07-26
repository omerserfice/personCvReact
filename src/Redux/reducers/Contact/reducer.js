const initialState = {
    contactData:[],
}

const contactReducers = (state = initialState,action) => {
      switch (action.type) {
          case "GET_CONTACT":
              return {...state,contactData:action.allData};
          default:
              return state;
      }
}

export default contactReducers;