const initialState = {
    profiles: [
        {
            name: 'admin',
            password: '123',
            email: 'email@xxx.com',
            phone: '1234567899'
        },
    ],
    login: false,
    personIsLogin: {

    }
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER': {
            return {
                ...state,
                profiles: [...state.profiles, action.profile]
            }
        }
        case 'LOGIN': {
            return {
                ...state,
                login: true,
                personIsLogin: action.profile
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                login: false
            }
        }
        default:
            return state
    }
}




export default Reducer;
