import { WordActionTypes } from '../actions/word'

const initialState = {
    wordOfTheDay: '',
    date: '',
    wordOfTheDayLoader: false,
    wordOfTheDayError: null,
    meanings: '',
    examples: [],
    history: []
}

const wordReducer = (state = initialState, action: { type: string, payload: any }) => {
    console.log(action.type, action.payload)
    switch (action.type) {
        case WordActionTypes.FETCH_WORD: 
            return {
                ...state,
                wordOfTheDayLoader: true,
                wordOfTheDayError: null
            }
        case WordActionTypes.FETCH_WORD_SUCCESS: 
            if (action.payload in state.history) {
                return {
                    
                        ...state,
                        wordOfTheDayLoader: false,
                        wordOfTheDay: action.payload.word,
                        date: action.payload.date,
                        meaning: action.payload.meaning,
                        examples: action.payload.examples
                    
                }
            }
            return {
                ...state,
                wordOfTheDayLoader: false,
                wordOfTheDay: action.payload.word,
                date: action.payload.date,
                meaning: action.payload.meaning,
                examples: action.payload.examples,
                history: [...state.history, action.payload]
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