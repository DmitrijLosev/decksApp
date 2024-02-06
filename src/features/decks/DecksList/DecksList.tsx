import s from './DecksList.module.css'
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../app/store.ts";
import {DeckItem} from "./DeckItem/DeckItem.tsx";
import {setDecksTC} from "../decks-thunks.ts";

export const DecksList = () => {

  const dispatch = useAppDispatch()
  const decksState = useAppSelector(state=>state.decksReducer.decks)

  useEffect(()=>{
   dispatch(setDecksTC())
  },[])

  return <ul className={s.list}>
    {decksState.map(d=><DeckItem deck={d} key={d.id}/>)}
  </ul>
}
