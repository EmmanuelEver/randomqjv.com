import ActionTypes from "../../constants/actionTypes";

const jokeReducer = (state = {}, {type, payload}) => {
    switch(type){
        case ActionTypes.NEW_JOKE:
            return {...state, ...payload}
    }
    return state;
}

export default jokeReducer