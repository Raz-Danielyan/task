export interface Cat {
  breeds: [],
  categories: [{id:string,name:string}],
  id:string,
  url:string,
  width:string,
  height: string,
}
export interface getCommand{
  id:string,
  name:string,
}

export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}
export interface Cats {
  items: Cat[] | [];
  LoadingState: LoadingState,
}