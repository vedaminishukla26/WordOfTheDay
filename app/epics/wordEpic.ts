import { combineEpics, Epic, ofType } from "redux-observable";
import WordActions, { WordActionTypes } from "../actions/word";
import { catchError, mergeMap, of } from "rxjs";
import apis from '../config/api'
import { defaultHeaders, getRequestOptions, requestTypes } from '../utils/apiUtils'
import isEmpty from '../utils/isEmpty'
import { ajax, AjaxResponse } from "rxjs/ajax";
import { AnyAction } from "redux";

interface Dependencies {
    ajax: typeof ajax;
  }
  
  type RootState = any;

const fetchWord : Epic<AnyAction, AnyAction, RootState, Dependencies> = ($action, store, { ajax }) => (
    $action.pipe(ofType(WordActionTypes.FETCH_WORD), 
    mergeMap(({ payload }) => {
        const api = apis.fetchWord()
        const body = {}
        const requestOptions = getRequestOptions(api, requestTypes.GET, defaultHeaders, body)
        return ajax(requestOptions)
        .pipe(mergeMap(({response} : AjaxResponse<any>) => {
            console.log('Parjanya', response)
            if(!isEmpty(response)) {
                return of(WordActions.fetchWordSuccess(response))
            }
            return of();
        }),
        catchError(err => of(WordActions.fetchWordFailure(err)))
        ) 
    }))
)


export default combineEpics(
    fetchWord
)