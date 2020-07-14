const initialState = {
    profiles: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER': {
            console.log(state)
            return {
                ...state,
                profiles: [...state.profiles, action.profile]
            }
        }
        default:
            return state
    }
}




export default Reducer;
