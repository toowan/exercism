// Create a DnaTranscriber module.  
var DnaTranscriber = function(){
};

// Create a toRna method for the module
DnaTranscriber.prototype.toRna = function(dnaStrand) {
  var rnaStrand = '';

  // Store the nucleotide conversion in a hash
  var rnaMap = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };
  
  //
  dnaStrand = dnaStrand.split('');  
  
  dnaStrand.map(function(letter) {
    rnaStrand += rnaMap[letter];
  });

  return rnaStrand; 
};


module.exports = DnaTranscriber; 






// //////////


// // Create a DnaTranscriber module.  
// var DnaTranscriber = function(){
//   // 'this' allows you to access the dna hash when creating a new object via 
//   // 'var dna Transcriber = new DnaTranscriber();' 
//   this.dna = {
//     G: 'C',
//     C: 'G',
//     T: 'A',
//     A: 'U'
//   };
// };


// // Create a 'transcribe' method for DnaTranscriber module
// DnaTranscriber.prototype.transcribe = function(strand, type) {
//     // convert string into an array of letters
//     strand = strand.split('');  // ['G']
//     // take each letter in the strand and retrieve its value stored in the dna hash
//     return strand.map(function(letter) {  
//         return type[letter];
//     // join the values together to form the new transcribed string
//     }).join('');
// };

// // Create 'transcribe to Rna' method by calling the transcribe function
// DnaTranscriber.prototype.toRna = function(dnaStrand) {
//     return this.transcribe(dnaStrand, this.dna);
// };


// module.exports = DnaTranscriber; 




