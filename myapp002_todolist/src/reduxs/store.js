import { reducer } from "./reducer";
import { letgacy_createStore as createStroe } from "redux";

export const store = createStroe(reducer);
