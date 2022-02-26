import { RootState } from "../../store";
import { Cats } from "./contracts/CatsStructure";

export const selectCats = (state: RootState): Cats => state.Cats;