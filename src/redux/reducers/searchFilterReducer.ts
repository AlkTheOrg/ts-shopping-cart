import Constants from "../constants";
import { SearchFilterAction, SearchFilterState } from "../constants/type";

const searchFilterReducer = (
  state: SearchFilterState = "",
  action: SearchFilterAction
): SearchFilterState => {
  switch (action.type) {
    case Constants.SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

export default searchFilterReducer;
