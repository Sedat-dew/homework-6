// HOMEWORK #1: Create a function called tellStory()
function tellStory(arr) {
  if (arr.length !== 3 || !arr.every((item) => typeof item === "string")) {
    return "Error: Input must be an array of 3 strings.";
  }
  const [name, mood, activity] = arr;
  return `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
}

// Example usage:
console.log(tellStory(["Alice", "happy", "reading"]));

// HOMEWORK #2: Sum of numbers in an array with validation
function validateNumber(num) {
  return typeof num === "number" && !isNaN(num);
}

function sumNumbers(numbers) {
  if (!Array.isArray(numbers) || numbers.length !== 5) {
    return "Error: Input must be an array of 5 numbers.";
  }
  for (const num of numbers) {
    if (!validateNumber(num)) {
      return `Error: Invalid number '${num}' in array.`;
    }
  }
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Example usage:
console.log(sumNumbers([1, 2, 3, 4, 5]));
console.log(sumNumbers([1, "two", 3, 4, 5]));

// HOMEWORK #3: Concatenate strings in an array
function concatenateStrings(stringsArray) {
  if (
    !Array.isArray(stringsArray) ||
    !stringsArray.every((item) => typeof item === "string")
  ) {
    return "Error: Input must be an array of strings.";
  }
  return stringsArray.join(" ");
}

// Example usage:
console.log(
  concatenateStrings(["Hello", "there", "students", "of", "SEDC", "!"])
);

// HOMEWORK #4: Looping structures
function loopNumbers() {
  let result = "";
  for (let i = 1; i <= 20; i++) {
    result += i;
    result += i % 2 === 0 ? "\n" : " ";
  }
  console.log(result);
}

// Example usage:
loopNumbers();

// HOMEWORK #5: Sum of MAX and MIN numbers in an array
function sumMaxMin(array) {
  const numbers = array.filter((item) => typeof item === "number");
  if (numbers.length === 0) return "Error: No valid numbers in the array.";

  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `Max: ${max}, Min: ${min}, Sum: ${max + min}`;
}

// Example usage:
console.log(sumMaxMin([3, 5, 6, 8, 11]));
console.log(sumMaxMin([3, "hello", 7, true, 1]));

// HOMEWORK #6: Combine first and last names into full names
function combineNames(firstNames, lastNames) {
  if (
    !Array.isArray(firstNames) ||
    !Array.isArray(lastNames) ||
    firstNames.length !== lastNames.length
  ) {
    return "Error: Input must be two arrays of the same length.";
  }
  for (const name of [...firstNames, ...lastNames]) {
    if (typeof name !== "string") {
      return "Error: All names must be strings.";
    }
  }
  return firstNames.map(
    (firstName, index) => `${index + 1}. ${firstName} ${lastNames[index]}`
  );
}

// Example usage:
console.log(combineNames(["Bob", "Jill"], ["Gregory", "Wurtz"]));
