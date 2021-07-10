import ActionTypes from "../../constants/actionTypes"

const select_choice = (payload) => {
    return{
        type:ActionTypes.SELECT_CHOICE,
        payload
    }
}


export {select_choice}