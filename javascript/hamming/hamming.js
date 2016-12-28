// Create a module called Hamming
var Hamming = function() {}; 

// Add a method to calculate Hamming distance to the module
Hamming.prototype.compute = function(dna1, dna2){
	var distance = 0

	if (dna1.length !== dna2.length) {
		throw new Error("DNA strands must be of equal length."); 
	}

	var i = 0; 
	while (i < dna1.length) {
		if (dna1[i] !== dna2[i]) {
			distance++; 
		}
		i++; 
	}
	return distance
}

// Export the module
module.exports = Hamming; 


