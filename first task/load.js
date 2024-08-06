
msv
//1
//remove duplicates
function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
  }
  const arrayofNumbers =[1,5,7,9,1,7,9];
  const array = removeDuplicates(arrayofNumbers);
  console.log(array);
  
  
   //2
   const nestedObject = {
    id: 1,
    name: 'John Doe',
    contact: {
        email: 'john.doe@example.com',
        phone: {
            home: '123-456-7890',
            work: '987-654-3210'
        }
    },
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        postalCode: '12345'
    },
};
console.log(nestedObject);


//3

function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];

console.log(mergeSortedArrays(array1, array2));


//4
function sortByKey(arr, key) {
    return arr.slice().sort((a, b) => {
        if (a[key] < b[key]) {
            return -1; 
        }
        if (a[key] > b[key]) {
            return 1; 
        }
        return 0; 
    });
}


const data = [
    { id: 3, name: 'John', age: 25 },
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 22 }
];

console.log(sortByKey(data, 'id'));

console.log(sortByKey(data, 'name'));

console.log(sortByKey(data, 'age'));

//5
function validateURL(url) {
    try {
        new URL(url);
        return true; 
    } catch (e) {
        return false; 
    }
}

console.log(validateURL('https://example.com')); 

//nestedobj
const nestedObject = {

    a: "1",
    b: "2",
    c: "3",
    d: {

        da: "D1",
        db: "D2",
        dc: "D3",

        e: {

            ea: "E1",
            eb: "E2",
            ec: "E3",
        },
    },

};


const vals = Object.values(nestedObject)

const expectedObject = {

    a: "1",
    b: "2",
    c: "3",
    da: "D1",
    db: "D2",
    dc: "D3",

};

var outputObject = {};

function validateEntry(nestedObject) {

    var returnObject = {};

    for (let index = 0; index < Object.keys(nestedObject).length; index++) {

        const key = Object.keys(nestedObject)[index];
        const value = nestedObject[key];

        if (typeof value !== "object") {
            returnObject[key] = value;
        } else {
            returnObject = { ...returnObject, ...validateEntry(value) };
        }

    }

    return returnObject;

}

outputObject = validateEntry(nestedObject);



console.log({ expectedObject, outputObject });




//1
function countCharacter(input, char) {
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === char) {
            count++;
        }
    }

    return count;
}


console.log(countCharacter("hello world", "o"));
console.log(countCharacter("javascript", "a")); 
console.log(countCharacter("12345", "5"));      
console.log(countCharacter("56512354","5"))



//2
function reverseString(input) {
    let reversed = '';

    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }

    return reversed;
}


console.log(reverseString("hello"));   
console.log(reverseString("world"));  
console.log(reverseString("12345"));  


//3
function capitalizeWords(input) {
    let words = input.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i]) { 
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(' ');
}

console.log(capitalizeWords("hello world"));                    
console.log(capitalizeWords("javascript is fun"));              
console.log(capitalizeWords("capitalize words"));               
console.log(capitalizeWords("make every word count"));          
console.log(capitalizeWords("this is a test"));                 
console.log(capitalizeWords("programming in javascript"));      



//4
function removeDuplicates(arr) {
    let uniqueElements = new Set(arr);

    return Array.from(uniqueElements);
}

console.log(removeDuplicates([1, 2, 3, 1, 2, 4, 5])); 
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); 
console.log(removeDuplicates([1, 1, 1, 1, 1])); 
console.log(removeDuplicates([])); 
console.log(removeDuplicates([true, false, true, false])); 



function sortByKey(arr, key) {
    return arr.slice().sort((a, b) => {
        if (a[key] < b[key]) {
            return -1; 
        }
        if (a[key] > b[key]) {
            return 1; 
        }
        return 0; 
    });
}


const data = [
    { id: 3, name: 'John', age: 25 },
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 22 }
];

console.log(sortByKey(data, 'id'));

console.log(sortByKey(data, 'name'));

console.log(sortByKey(data, 'age'));

*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character Counter</title>
</head>
<body>
    <h1>Character Counter</h1>
    <input type="text" id="inputField" placeholder="Type something...">
    <p>Number of characters: <span id="charCount">0</span></p>

    <script>
        const inputField = document.getElementById('inputField');
        const charCount = document.getElementById('charCount');

        inputField.addEventListener('input', () => {
            charCount.textContent = inputField.value.length;
        });
    </script>
</body>
</html>










