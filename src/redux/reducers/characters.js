import { GET_CHARACTERS, GET_CHARACTERS_ERROR } from "../actions/types";

const initialSettingsState = {
    characters:[],
    error:null
}

const user = (state = initialSettingsState, action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
        case GET_CHARACTERS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default user
