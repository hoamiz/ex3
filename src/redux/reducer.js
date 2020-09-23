const initialState = {
    profiles: [
        {
            key: '1',
            name: 'admin',
            password: '',
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
        case 'DELETE': {
            return {
                ...state,
                profiles: [...state.profiles.filter(profile => profile.key !== action.key)]
            }
        }
        case 'EDIT': {
            const profiles = state.profiles.filter(profile => profile.name !== action.person.name)
            const key = state.profiles.filter(profile => profile.name === action.person.name)[0].key
            action.person.key = key
            return {
                ...state,
                profiles: [...profiles, action.person]
            }
        }
        default:
            return state
    }
}




export default Reducer;
