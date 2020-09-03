import SearchUI from '../components/SearchUI';
import { connect } from "react-redux";
import { filterByText } from "../actions";

const mapStateToProps = (state = {}) => {
  return state
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (searchText)=> {
    dispatch(filterByText(searchText));
  },
  onKeyUp: (event) => {console.log(`Key was Released, contained text is: ${event.target.value}`)}
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUI);
