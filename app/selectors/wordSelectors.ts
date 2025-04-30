
import { RootState } from '../config/store'

const getWord = (state: RootState): string => state.wordReducer.wordOfTheDay;
const getMeanings = (state: RootState): never[] => state.wordReducer.meanings;
const WordSelectors = {
    getWord,
    getMeanings
}

export default WordSelectors