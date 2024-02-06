import {ActionsType, AppRootState, ThunkCommonType} from "../../app/store.ts";
import {decksApi} from "./decks-api.ts";
import {addDeckAC, setDecksAC} from "./decks-reducer.ts";
import {FormValues} from "./AddNewDeckForm/AddNewDeckForm.tsx";
import {ThunkAction} from "redux-thunk";

export const setDecksTC = ():ThunkCommonType => dispatch => {
    decksApi.getDecks().then(res=>
        dispatch(setDecksAC(res.data.items)))
}
export const addDeckTC =(body:FormValues):ThunkAction<Promise<unknown>, AppRootState, unknown, ActionsType>=>dispatch => {
return decksApi.addDecks(body).then(res=> {dispatch(addDeckAC(res.data))
})
}