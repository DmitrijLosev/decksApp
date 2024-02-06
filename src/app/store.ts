import { combineReducers, legacy_createStore, applyMiddleware, AnyAction } from 'redux'
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {DecksActions, decksReducer} from "../features/decks/decks-reducer.ts"

const rootReducer = combineReducers({
  decksReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootState = ReturnType<typeof rootReducer>

export type ActionsType = DecksActions

export type AppDispatch = ThunkDispatch<AppRootState, unknown, ActionsType>

export type ThunkCommonType = ThunkAction<void, AppRootState, unknown, ActionsType>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store