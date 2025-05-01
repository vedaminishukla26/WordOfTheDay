
import { RootState } from '../config/store'

const getWord = (state: RootState): string => state.wordReducer.wordOfTheDay;
const getMeanings = (state: RootState): never[] => state.wordReducer.meaning;
const getExamples = (state: RootState): never[] => state.wordReducer.examples;
const getHistory = (state: RootState): never[] => state.wordReducer.history;

const WordSelectors = {
    getWord,
    getMeanings,
    getExamples,
    getHistory
}

export default WordSelectors