import { combineEpics } from "redux-observable";
import wordEpic from '../epics/wordEpic'

const rootEpic = combineEpics(wordEpic);

export default rootEpic;