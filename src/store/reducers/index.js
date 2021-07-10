import { combineReducers } from "redux";
import activeChoiceReducer from "./activeChoiceReducer";
import jokeReducer from "./jokeReducer";
import quoteReducer from "./quoteReducer";
import verseReducer from "./verseReducer";

const reducers = combineReducers({
    choice:activeChoiceReducer,
    quote:quoteReducer,
    joke:jokeReducer,
    verse:verseReducer
})

export default reducers;