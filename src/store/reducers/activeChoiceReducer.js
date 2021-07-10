import ActionTypes from "../../constants/actionTypes";

const initialState = { choice:"quotes" }

const activeChoiceReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SELECT_CHOICE:
            return {...state, choice:payload}
    }
    return state
}

export default activeChoiceReducer;