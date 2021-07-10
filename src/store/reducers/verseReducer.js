import ActionTypes from "../../constants/actionTypes";

const verseReducer = (state = {}, {type, payload}) => {
    switch(type){
        case ActionTypes.NEW_VERSE:
            return {...state, verse:payload}
    }
    return state;
}

export default verseReducer