const actionTypePrefix = 'WORD'

export const WordActionTypes = {
   FETCH_WORD: `${actionTypePrefix}/FETCH_WORD`,
   FETCH_WORD_SUCCESS: `${actionTypePrefix}/FETCH_WORD_SUCCESS`,
   FETCH_WORD_FAILURE: `${actionTypePrefix}/FETCH_WORD_FAILURE` 
}

const fetchWord = (payload?: {}) => ({
        type: WordActionTypes.FETCH_WORD,
        payload: payload
})

const fetchWordSuccess = (payload: {}) => ({
        type: WordActionTypes.FETCH_WORD_SUCCESS,
        payload: payload
})

const fetchWordFailure = (payload: {}) => ({
    
        type: WordActionTypes.FETCH_WORD_FAILURE,
        payload: payload
})


const WordActions = {
    fetchWord,
    fetchWordSuccess,
    fetchWordFailure
}

export default WordActions;