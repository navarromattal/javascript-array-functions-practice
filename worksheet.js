const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
/*
//1. Get characters with mass greater than 100
const greater100Characters = characters.filter(c => c.mass > 100);
console.log('greater100Characters ::>', greater100Characters);
//2. Get characters with height less than 200
const shorterThan200 = characters.filter(c => c.height < 200);
console.log('shorterThan200 ::>', shorterThan200);
//3. Get all male characters
const allMale = characters.filter(c => c.gender === 'male');
console.log('allMale ::>', allMale);
//4. Get all female characters
const allFemale = characters.filter(c => c.gender === 'female');
console.log('allFemale ::>', allFemale);
*/

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a,b) => a.mass - b.mass);
console.log('byMass ::>', byMass);
//2. Sort by height
const byHeight = characters.sort((a,b) => a.height - b.height);
console.log('byHeight ::>', byHeight);
//3. Sort by name
const byName = characters.sort((a,b) => a.name < b.name ? -1 : 1);
console.log('byName ::>', byName);
//4. Sort by gender
const byGender = characters.sort((a,b) => a.gender < b.gender ? -1 : 1);
console.log('byGender ::>', byGender);

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
