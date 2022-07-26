const initialState = {
    projectData: [],
    projectDetail: []
}

const projectReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROJECT':
            return { ...state, projectData: action.allData };
        case 'GET_PROJECT_BY_ID':
            return { ...state, projectDetail: action.allData };
        default:
            return state;
    }
}

export default projectReducers