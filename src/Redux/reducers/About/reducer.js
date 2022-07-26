const initialState = {
    aboutData: [],
}

const aboutReaducers = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ABOUT":
            return { ...state, aboutData: action.allData };
        default:
            return state;
    }
}

export default aboutReaducers;