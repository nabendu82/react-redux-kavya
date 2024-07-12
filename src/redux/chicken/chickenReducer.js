import { BUY_CHICKEN } from "./chickenTypes"

const initialState = {
    numOfChicken: 10
}

const chickenReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_CHICKEN: 
            return {
                ...state,
                numOfChicken: state.numOfChicken - 1
            }
        default: return state
    }
}

export default chickenReducer