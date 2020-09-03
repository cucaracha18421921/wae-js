export const splitTextIntoWords = (text, word) => {
  const matchingRegExp = RegExp(word, 'g');
  const wordLength = word.length;
  const matchingIndices = text.matchAll(matchingRegExp);
  let result = [];
  let lastIndex = 0;
  for( const {index} of matchingIndices){
    result.push({
      text: text.substring(lastIndex,index),
      highlight: false
    });
    result.push({
      text: text.substring(index,index+wordLength),
      highlight: true,
    });
    lastIndex = index+wordLength;
  }
  result.push({
    text: text.substring(lastIndex,text.length),
    highlight: false
  });
  return result.filter(r=>r.text!=='');
};
