//remove duplicate from an array

function removeDuplicatesLoop(arr) {
  let unique = [];  

  for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      unique.push(arr[i]);
    }
  }

  return unique;
}
console.log(removeDuplicatesLoop([1, 2, 2, 3, 4, 4, 5, 1])); // [1, 2, 3, 4, 5]



//find the second largest number in an array
function secondLargestLoop(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }

  return second;
}

console.log(secondLargestLoop([10, 5, 20, 20, 8])); // 10

//count frequency of each character in a string
function charFrequencyLoop(str) {
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  return freq;
}

console.log(charFrequencyLoop("hello")); // {h:1, e:1, l:2, o:1}
