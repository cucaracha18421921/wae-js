import {TextFilters} from "../actions";

const searchFilter = (state = '' , action) => {
  if(action.type === TextFilters.TEXT_FILTER){
    return action.searchText;
  }
  return state;
};

export default searchFilter;
