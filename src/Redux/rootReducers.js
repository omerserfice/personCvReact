import { combineReducers } from "redux";
import aboutReducers from "./reducers/About/reducer";
import experienceReducers from "./reducers/Experience/reducer";
import educationReducers from "./reducers/Education/reducer";
import abilityReducers from "./reducers/Ability/reducer"
import certificateReducers from './reducers/Certificate/reducer'
import projectReducers from './reducers/Project/reducer'
import contactReducers from './reducers/Contact/reducer'

const rootReducers = combineReducers({
    aboutReducers,
    experienceReducers,
    educationReducers,
    abilityReducers,
    certificateReducers,
    projectReducers,
    contactReducers,

}) 

export default rootReducers;
