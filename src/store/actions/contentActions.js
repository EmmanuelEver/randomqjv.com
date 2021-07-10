import ActionTypes from "../../constants/actionTypes"

const new_quote = (payload) => {
    return{
        type:ActionTypes.NEW_QUOTE,
        payload
    }
}
const new_joke = (payload) => {
    return{
        type:ActionTypes.NEW_JOKE,
        payload
    }
}
const new_verse = (payload) => {
    return{
        type:ActionTypes.NEW_VERSE,
        payload
    }
}

export { new_quote, new_joke, new_verse }