import React from 'react'
import PropTypes from 'prop-types'

const renderText = (text, highlightText ) => {
  if(!highlightText){
    return <a>{text}</a>;
  }

  const matchingRegExp = RegExp(highlightText, 'g');
  const highlightTextLength = highlightText.length;
  const matchingIndices = text.matchAll(matchingRegExp);
  let result = [];
  let lastIndex = 0;
  for( const {index} of matchingIndices){
    result.push(text.substring(lastIndex,index));
    result.push(text.substring(index,index+highlightTextLength));
    lastIndex = index+highlightTextLength;
  }
  result = result.filter(t=>t!=='');
  return result.map(text=><a style={{backgroundColor:(text === highlightText)?'yellow':'none'}}>{text}</a>)
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
