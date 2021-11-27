import { EDIT_MEMBERSHIP } from "../actions/types";

const initialSettingsState = {
    name:"Sam",
}

const user = (state = initialSettingsState, action) => {
    switch (action.type) {
        case EDIT_MEMBERSHIP:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default user
