import { GET_EPISODES, GET_EPISODES_ERROR} from "../actions/types";

const initialSettingsState = {
    episodes:[],
    error: null
}

const user = (state = initialSettingsState, action) => {
    switch (action.type) {
        case GET_EPISODES:
            return {
                ...state,
                episodes: action.payload
            }
        case GET_EPISODES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default user
