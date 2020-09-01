import React, {useState} from 'react';
import PropTypes from 'prop-types';

function SearchUI({onClick, onKeyUp}){
  const [searchText, setSearchText] = useState('');
  return (
    <div>
      <input type="text" placeholder={"Search"}
         onChange={event => setSearchText(event.target.value)}
         onKeyUp={onKeyUp}
      />
      <button onClick={()=>onClick(searchText)}>Submit</button>
    </div>
  );
}

SearchUI.propTypes = {
  onClick: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
};

export default SearchUI;
