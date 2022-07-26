const initialState = {
    abilityData:[],
}

const abilityReducers = (state = initialState,action) => {
      switch (action.type) {
          case "GET_ABILITY":
              return {...state,abilityData:action.allData};
          default:
              return state;
      }
}

export default abilityReducers;