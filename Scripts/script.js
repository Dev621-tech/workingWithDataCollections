// Starting CSV 
let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

// .split (a string method) that splits the string into an array of little strings , using a delimiter
let firstRow = str.split('\n')[0];
// declared variable firstRow - everything from index 0 to the first delimiter ('\n')
let numberOfColumn = firstRow.split(',').length
// declared variable numberOfColumn - turning firstRow into an array of strings using (',') as the delimiter

// console.log("# of colums: ", numberOfColumn);
// Output is # of columns: 4 

// the variable cells will create a new array with the length equal to numberOfColumn and fill each element with '' (an empty string)
let cells = Array(numberOfColumn).fill('');

// Setting variable commas to 0
let commas = 0;

// Setting variable results to an array - an array for storing results
let results = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] == ',') {
        commas++;
        // if the string index is at a ',' add 1 to the variable commas value

    } else if (str[i] == '\n') {
        // console.log(...cells);
        results.push([...cells]);
        // stores a copy of each row as an array and is push to the variable result

        cells = Array(numberOfColumn).fill('');
        commas = 0;
        // also resets the cells and commas variable back to 0

    } else {
        cells[commas] += str[i];
        // puts every other index/char inside of a cell
    }

    if (i == str.length - 1) {
        // console.log(...cells);
        results.push([...cells]);
        // stores a copy of the last row
    }
}

// Log all results !!!
console.log(results);


// Transforming Data
// Declaring the variable headings as a new array of the index 0 of the results array - .map is turning each string in that array to all lower case
let headings = results[0].map(h => h.toLowerCase());

// Declaring variable persons -  to store all my different (per) aka people
let persons = [];

for (let i = 1; i < results.length; i++) {
    let row = results[i];
    let per = {};
    // Starting at index 1 (skipping index 0) of the results variable, turning each index into an object

    for (let x = 0; x < headings.length; x++) {
        per[headings[x]] = row[x];
        // goes through headings assigning one to every index of each "row" aka every string
    }

    persons.push(per);
    // Pushes copy to person object
}

// Logs all people !!!
console.log(persons);

// Sorting and Manipulating Data

persons.pop();
// Removed Bill
//console.log(persons);

persons.splice(1, 0, {
    id: '48',
    name: 'Barry',
    occupation: 'Runner',
    age: '25'
});
// Inserted Barry at Index 1
// console.log(persons);

persons.push({
    id: '7',
    name: 'Bilbo',
    occupation: 'none',
    age: '111'
});
//Add Bilbo to the end
// console.log(persons);

// Full Circle

