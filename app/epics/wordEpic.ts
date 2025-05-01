import { combineEpics, Epic, ofType } from "redux-observable";
import WordActions, { WordActionTypes } from "../actions/word";
import { catchError, mergeMap, of } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { AnyAction } from "redux";
import wordsData from '../data/words.json';

interface Dependencies {
    ajax: typeof ajax;
  }
  
  type RootState = any;

const fetchWord : Epic<AnyAction, AnyAction, RootState, Dependencies> = ($action, store, { ajax }) => (
    $action.pipe(ofType(WordActionTypes.FETCH_WORD), 
    mergeMap(({ payload }) => {
        const currentDate = new Date(Date.now())
        const startDate = new Date('2025-04-29T00:00:00')
        var index = (currentDate - startDate) / (24 * 3600 * 1000) 
        index = Math.floor(index)
        console.log(index, wordsData[index])
        const currWord =  { ...wordsData[index], date: currentDate.toDateString()}
        return of(WordActions.fetchWordSuccess(currWord))
    }))
)

export default combineEpics(
    fetchWord
)