import produce, { Draft } from 'immer';
import { CatsAction } from './actions';
import { CatsActionType } from './contracts/ActionType';
import { Cats, LoadingState } from './contracts/CatsStructure';

const initialCatsState: Cats = {
  items: [],
  LoadingState: LoadingState.NEVER
}
export const tweetsReducer = produce((draft: Draft<Cats>, action: CatsAction) => {
  switch (action.type) {
    case CatsActionType.SET_CATS_DATA:
      draft.items =[...draft.items,...action.payload];
      draft.LoadingState = LoadingState.LOADED;
      break;
    case CatsActionType.SET_CATS_CATEGORY:
      draft.items = action.payload;
      draft.LoadingState = LoadingState.LOADED;
      break;
    case CatsActionType.FETCH_CATS_CATEGORY:
      draft.LoadingState = LoadingState.LOADING;
      break;
    case CatsActionType.FETCH_CATS_DATA:
      draft.LoadingState = LoadingState.LOADING;
      break;
    case CatsActionType.SET_LOADING_STATE:
      draft.LoadingState = action.payload;
      break;
  }
}, initialCatsState);