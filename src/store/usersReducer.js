
const defaultState = {
    users: [], // массив игроков
}

// payload: {id: 1, name: "name"}}

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {...state, users: [...state.users, action.payload] }
        case 'REMOVE_USER':
            return {...state, users: state.users.filter(user => user.id !== action.payload)}

        default:
            return state
    }
}