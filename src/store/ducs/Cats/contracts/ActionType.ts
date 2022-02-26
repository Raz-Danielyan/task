import { Action } from "redux";
import { Cat, LoadingState } from "./CatsStructure";

export enum CatsActionType {
  SET_CATS_DATA = 'cats/SET_CATS_DATA',
  SET_CATS_CATEGORY = 'cats/SET_CATS_CATEGORY',
  FETCH_CATS_DATA = 'cats/FETCH_CATS_DATA',
  FETCH_CATS_CATEGORY = 'cats/FETCH_CATS_CATEGORY',
  SET_LOADING_STATE = 'cats/SET_LOADING_STATE',
}

export interface SetCatsActionInterface extends Action<CatsActionType> {
  type: CatsActionType.SET_CATS_DATA,
  payload: Cat[]
};
export interface SetCatsCategoryActionInterface extends Action<CatsActionType> {
  type: CatsActionType.SET_CATS_CATEGORY,
  payload: Cat[]
};
export interface SetCatsLoadingStateActionInterface extends Action<CatsActionType> {
  type: CatsActionType.SET_LOADING_STATE,
  payload: LoadingState
}

export interface FetchCatsActionInterface extends Action<CatsActionType> {
  type: CatsActionType.FETCH_CATS_DATA,
  payload:string
}
export interface FetchCatsCallectionActionInterface extends Action<CatsActionType> {
  type: CatsActionType.FETCH_CATS_CATEGORY,
  payload:string
}