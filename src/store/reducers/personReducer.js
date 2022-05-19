const initialState = {
    person: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'setPerson':
            return {...state, person: action.payload}
        default :
            return state;
    }
}

export default reducer;