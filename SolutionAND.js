/**
* The following is the function where the solution shall be written
*/

function solution (input) {
  var answer = [];

  // Clean input to just integers. Throw error if no Ints.
  var numberPattern = /\d+/g;
  try {
    clean = input.match( numberPattern ).join('');
  } catch (err) {
    console.log('No integers in input.');
  }

  // Calculate permutations.
  answer = permutations(clean);
  // Remove duplicate values if duplicate integers in input.
  unique = [...new Set(answer)];

  // Sort answer from largest to smallest.
  return unique.sort().reverse();
}

function permutations (input) {
  var answer = [];

  // Return the input if length one.
  if (input.length == 1) {
		return [ input ];
	}

  // Iterate through each number in input.
  for (var i = 0; i < input.length; i++) {
    // First number in input.
    var first = input[i];
    // Run permutations on remaining numbers.
    var remainingNums = input.substring(0, i) + input.substring(i + 1);
    var subPerms = permutations(remainingNums);
    // Add first Int + calculated permutations.
    for (var j = 0; j < subPerms.length; j++) {
			answer.push(first + subPerms[j]);
		}
  }
  return answer;
}

// some example inputs
console.log(solution('3'));
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('ABC'));
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
console.log(solution('101'));
