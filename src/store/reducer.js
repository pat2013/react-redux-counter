const intialState = {
    value: 0
}

const reducer = (state = intialState, action) => {

    switch (action.type) {
        case 'ADD':
         return {
             ...state,
             value:state.value + 1
         }
        case 'SUB':
         return {
             ...state,
             value:state.value - 1
         }
        default: return state
    }

}

export default reducer;