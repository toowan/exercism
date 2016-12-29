//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

	// If input is in caps and input is just alpha characters
	if (input === input.toUpperCase() && input.toUpperCase() !== input.toLowerCase()) {
		return 'Whoa, chill out!';
	} 
	// If input is a question (? has to be at the end of string)
	if (input[input.length -1] === '?') {
		return 'Sure.';
	} 
	// if input is nothing (trim removes whitespace)
	if (input.trim().length === 0) {
		return 'Fine. Be that way!';
	} 
	// if anything else
	else {
		return 'Whatever.'; 
	}
};

module.exports = Bob;


