
var words = function() {};

words.prototype.count = function(phrase) {
  // do a global (g) search and replace all punctuations with whitespace
  phrase = phrase.replace(/[!!&@$%¡^&¿?:.,]/g, " ");
  // do a global (g) search and replace all whitespaces and normalize to lowercase
  phrase = phrase.replace(/\s+/g,' ').trim().toLowerCase();
  // do a global (g) search and replace apostrophes after or before with whitespace
  phrase = phrase.replace(/\s'|'\s/g, ' ');
  console.log(phrase);
  // split string into an array
  var wordArray = phrase.split(" "); 
  // handles properties that exist on Object's prototype 
  var count = Object.create(null);
  for (var i = 0; i < wordArray.length; i++) {
    var oneWord = wordArray[i];  
    // if this word is not already in the wordArray, give it a count of 1.  
    if (!count[oneWord]) {
      count[oneWord] = 1;
    } else {
    // if this word is already in the wordArray, increase its count. 
      count[oneWord] ++;
    }
  }
  return count; 
};

module.exports = words;

