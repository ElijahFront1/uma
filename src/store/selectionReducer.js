export const SET_SELECTION = "SET_SELECTION"
export const FETCH_SELECTION = "FETCH_SELECTION"

const defaultState = {
    selection: []
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SELECTION:
            return { ...state, selection: action.payload }
        default:
            return state
    }
}

export const setSelection = payload => ({ type: SET_SELECTION, payload })
export const fetchSelection = () => ({ type: FETCH_SELECTION })