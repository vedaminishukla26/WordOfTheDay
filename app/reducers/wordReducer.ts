import { WordActionTypes } from '../actions/word'

const initialState = {
    wordOfTheDay: '',
    date: '',
    wordOfTheDayLoader: false,
    wordOfTheDayError: null,
    meanings: [],
    examples: [],
    history: []
}

const wordReducer = (state = initialState, action: { type: string, payload: any }) => {
    console.log(action.type)
    switch (action.type) {
        case WordActionTypes.FETCH_WORD: 
            return {
                ...state,
                wordOfTheDayLoader: true,
                wordOfTheDayError: null
            }
        case WordActionTypes.FETCH_WORD_SUCCESS: 
            return {
                ...state,
                wordOfTheDayLoader: false,
                wordOfTheDay: action.payload.word.word,
                date: action.payload.date,
                meanings: action.payload.word.definitions
            }
        case WordActionTypes.FETCH_WORD_FAILURE: 
            return {
                ...state,
                wordOfTheDayLoader: false,
                wordOfTheDayError: action.payload.error
            }
        default: 
            return state
    }
}

export default wordReducer