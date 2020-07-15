const initialState = {
    profiles: [
        {
            name: 'admin',
            password:'Aaaaaaaaa',
            email:'email@xxx.com',
            phone:'1234567899'
        },
    ]
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER': {
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
