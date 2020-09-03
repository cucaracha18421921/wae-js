import React from 'react'
import PropTypes from 'prop-types'
import { splitTextIntoWords } from "../utils/textUtils";
import styled from "styled-components";

const Text = styled.a`
  font-size: xx-large;
`;

const HighlightedText = styled(Text)`
  background-color: yellow;
`;

const renderText = (text, highlightText ) => {
  if(!highlightText){
    return <Text>{text}</Text>;
  }
  const highlightedTextArray = splitTextIntoWords(text, highlightText);
  return highlightedTextArray.map(({text, highlight}) =>(highlight)?<HighlightedText>{text}</HighlightedText>:<Text>{text}</Text>)
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
