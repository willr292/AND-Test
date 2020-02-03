/**
* The following is the function where the solution shall be written
*/

function solution (input) {

  // Clean input to just integers.
  var numberPattern = /\d+/g;
  try {
    clean = input.match( numberPattern ).join('');
  } catch (err) {
    console.log('No integers in input.');
  }

  
  return clean;
}

// some example inputs
console.log(solution('3'));
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('ABC'));
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
