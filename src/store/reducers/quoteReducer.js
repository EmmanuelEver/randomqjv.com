import ActionTypes from "../../constants/actionTypes";

const quoteReducer = (state = {}, {type, payload}) => {
    switch(type){
        case ActionTypes.NEW_QUOTE:
            return {...state, quote:payload}
    }
    return state;
}

export default quoteReducer;