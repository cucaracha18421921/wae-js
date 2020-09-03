import React from 'react'
import PropTypes from 'prop-types'
import { splitTextIntoWords } from "../utils/textUtils";
import styled from "styled-components";

const HighlightedText = styled.a`
  background-color: yellow;
`;

const renderText = (text, highlightText ) => {
  if(!highlightText){
    return <a>{text}</a>;
  }
  const highlightedTextArray = splitTextIntoWords(text, highlightText);
  return highlightedTextArray.map(({text, highlight}) =>(highlight)?<HighlightedText>{text}</HighlightedText>:<a>{text}</a>)
};

const Todo = ({ onClick, completed, text, highlightText }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {renderText(text,highlightText)}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
