import { CatsActionType, FetchCatsActionInterface, FetchCatsCallectionActionInterface, SetCatsActionInterface,SetCatsCategoryActionInterface,SetCatsLoadingStateActionInterface } from "./contracts/ActionType";
import { Cat, LoadingState } from "./contracts/CatsStructure";



export const setCats = (payload: Cat[]): SetCatsActionInterface => ({
  type: CatsActionType.SET_CATS_DATA,
  payload,
});
export const setCatsCategory = (payload: Cat[]): SetCatsCategoryActionInterface => ({
  type: CatsActionType.SET_CATS_CATEGORY,
  payload,
});
export const FetchCats = (payload:string): FetchCatsActionInterface => ({
  type: CatsActionType.FETCH_CATS_DATA,
  payload,
});
export const FetchCatsCattegory = (payload:string): FetchCatsCallectionActionInterface => ({
  type: CatsActionType.FETCH_CATS_CATEGORY,
  payload,
});
export const setCatsLoadingState = (payload: LoadingState): SetCatsLoadingStateActionInterface => ({
  type: CatsActionType.SET_LOADING_STATE,
  payload,
});

export type CatsAction =
SetCatsActionInterface
  | SetCatsLoadingStateActionInterface
  | FetchCatsActionInterface
  | FetchCatsCallectionActionInterface
  | SetCatsCategoryActionInterface;