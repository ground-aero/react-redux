
const defaultState = {
    cash: 0,
}
// где 1-й аргумент - состояние 
export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CASH':
            return {...state, cash: state.cash + action.payload}
        case 'GET_CASH':
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}