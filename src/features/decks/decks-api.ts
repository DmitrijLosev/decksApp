import axios from 'axios'
import {FormValues} from "./AddNewDeckForm/AddNewDeckForm.tsx";

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi ={
  getDecks() {
    return instance.get<GetDecksResponseType>('/v2/decks')
  },
  addDecks(body:FormValues) {
    return instance.post<DecksType>('/v1/decks', body)
  }
}

export type GetDecksResponseType = {
  items: DecksType[],
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
  },
  maxCardsCount: number
}
export type DecksType =  {
  author: {
    id: string
    name: string
  },
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: Date
  updated: Date
  cardsCount: number
}