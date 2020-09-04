import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from "./uiComponents";
import styled from "styled-components";

const SearchInput = styled(Input)`
  
`;

const AutoFilterSwitch = styled.input`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 14px;
`;

const SearchButton = styled(Button)`
  margin-left: 20px;
`;

const AutoFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function SearchUI({submitSearch}){
  const [searchText, setSearchText] = useState('');
  const [autoFilter, setAutoFilter] = useState(false);
  return (
    <div>
      <AutoFilterContainer>
        <span>Auto Filter</span>
        <AutoFilterSwitch type="checkbox" data-test-id={'AutoFilterSwitch'} onChange={()=>{
          if(autoFilter){
            setAutoFilter(false);
          }
          else{
            setAutoFilter(true);
            submitSearch(searchText);
          }
        }}/>
      </AutoFilterContainer>
      <SearchInput type="text" data-test-id="SearchInput" placeholder={"Filter By text..."}
         onChange={event => {
           const searchText = event.target.value;
           setSearchText(searchText);
           if(autoFilter){
             submitSearch(searchText);
           }
         }}
      />
      {!autoFilter && <SearchButton onClick={()=>submitSearch(searchText)}>Submit</SearchButton>}
    </div>
  );
}

SearchUI.propTypes = {
  submitSearch: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
};

export default SearchUI;
