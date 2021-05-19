
const defaultState = {
    user: []
}

export const SET_USER = "SET_USER"
export const FETCH_USER = "FETCH_USER"

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export const setUser = payload => ({ type: SET_USER, payload })
export const fetchUser = () => ({ type: FETCH_USER })