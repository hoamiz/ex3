import _ from 'lodash'
const initialState = {
    profiles: [
        {
            key: '1',
            name: 'admin',
            password: '',
            email: 'email@xxx.com',
            phone: '1234567899',
            posts: [],
        },
    ],
    login: false,
    personIsLogin: {}
}
const Reducer = (state = initialState, action) => {
    console.log(action.payload, state)
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
        case 'POST_STATUS': {
            const key = action.payload.person.key
            const profiles = state.profiles.filter(profile => profile.key !== key)
            const person = state.profiles.filter(profile => profile.key === key)[0]
            const id = new Date().getTime()
            person.posts && person.posts.push({ author: action.payload.person.name, post: action.payload.post, id: id })
            return {
                ...state,
                profiles: [...profiles, person]

            }
        }
        case 'DEL_POST': {
            const newProfile = _.cloneDeep(state.profiles)
            if (action.payload.author === state.personIsLogin.name) {
                const index = state.profiles.findIndex(profile => profile.name === action.payload.author)
                const postIndex = newProfile[index].posts.findIndex(post => post.id === action.payload.id)
                newProfile[index].posts.splice(postIndex, 1)
            }
            return {
                ...state,
                profiles: newProfile

            }
        }
        default:
            return state
    }
}




export default Reducer;
