const INITIAL_STATE = {
    description: 'Ler Livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura',
        done: true
    }, {
        _id: 2,
        description: 'Reunião',
        done: false
    }]
}

// Reducer recebe sempre o estado atual e uma action
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED': 
            return { ...state, description: action.payload}
        default:
            return state
    }
}