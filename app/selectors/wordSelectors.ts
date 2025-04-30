
import { RootState } from '../config/store'

const getWord = (state: RootState): string => state.wordReducer.wordOfTheDay;
const getMeanings = (state: RootState): never[] => state.wordReducer.meanings;
const getExamples = (state: RootState): never[] => state.wordReducer.examples

const WordSelectors = {
    getWord,
    getMeanings,
    getExamples
}

export default WordSelectors