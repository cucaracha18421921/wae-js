import { splitTextIntoWords } from "./textUtils";

describe('textUtils tests',() => {
  const text = 'This is an example to test';
  it('should split text into words with no word contained into text', () => {
    const word = 'not';
    expect(splitTextIntoWords(text, word)).toEqual([{text:text,highlight: false}]);
  });

  it('should split into text into words when word in in the beggining of the text', () => {
    expect(splitTextIntoWords('not a normal test', 'not')).toEqual([
      {text: 'not', highlight: true},
      {text: ' a normal test', highlight: false},
    ]);
  });

  it('should split text into words when word is in between the text', ()=> {
    expect(splitTextIntoWords(text,'to')).toEqual([
      {text: 'This is an example ', highlight: false},
      {text: 'to', highlight: true},
      {text: ' test', highlight: false}]);
  });

  it('should split text into words when word appears in the beggining and in the end of the text', ()=> {
    expect(splitTextIntoWords('Test this example Test', 'Test')).toEqual([
      {text: "Test", highlight: true},
      {text: " this example ", highlight: false},
      {text: "Test", highlight: true},
    ]);
  });

  it('should split text into words when word appears in the more than 2 places', ()=>{
    expect(splitTextIntoWords(' Test this Test example Test','Test')).toEqual([
      {text: " ", highlight: false },
      {text: "Test", highlight: true },
      {text: " this ", highlight: false },
      {text: "Test", highlight: true },
      {text: " example ", highlight: false },
      {text: "Test", highlight: true },
    ]);
  });

  it('should split text into words when word appears in the more than 3 places including beginning and end', ()=>{
    expect(splitTextIntoWords('Test this Test example Test','Test')).toEqual([
      {text: "Test", highlight: true },
      {text: " this ", highlight: false },
      {text: "Test", highlight: true },
      {text: " example ", highlight: false },
      {text: "Test", highlight: true },
    ]);
  });

  it('should split text into words when word appears in the more than 3 places including beginning but not in the end', ()=>{
    expect(splitTextIntoWords('Test this Test example Test ','Test')).toEqual([
      {text:"Test", highlight: true },
      {text:" this ", highlight: false },
      {text:"Test", highlight: true },
      {text:" example ", highlight: false },
      {text:"Test", highlight: true },
      {text:" ", highlight: false },
    ]);
  });

})
