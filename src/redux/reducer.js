import * as action from './action'
const initialState = { model: 'login' }

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT': {
            return state
        }
        case 'REGISTER': {
            return { ...state, model: 'register' }
        }
        default:
            return state
    }
}




export default Reducer;
