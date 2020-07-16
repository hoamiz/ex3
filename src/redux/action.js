
export const onRegister = (profile) => {
    return {
        type: 'REGISTER',
        profile
    }
}

export const login = (profile) => {
    return {
        type: 'LOGIN',
        profile
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}



