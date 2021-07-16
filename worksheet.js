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
/*
//1. Get array of all names
const names = characters.map(c => c.name);
console.log('names ::>', names);
//2. Get array of all heights
const heights = characters.map(c => c.height);
console.log('heights ::>', heights);
//3. Get array of objects with just name and height properties
const nameHeightItems = characters.map(c => ({name: c.name, height: c.height}));
console.log('nameHeightItems ::>', nameHeightItems);
//4. Get array of all first names
const firstNames = characters.map(c => c.name.split(' ')[0]);
console.log('firstNames ::>', firstNames);
*/

//***REDUCE***
/*
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, c) => acc + c.mass, 0);
console.log('totalMass ::>', totalMass);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, c) => acc + c.height, 0);
console.log('totalHeight ::>', totalHeight);
//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, c) => {
    const color = c.eye_color;

    if (acc[color]){
        acc[color] +=1;
    }else{
        acc[color] = 1;
    }
    return acc;
}, {});
console.log('charactersByEyeColor ::>', charactersByEyeColor);
//4. Get total number of characters in all the character names
const totalNameCharacters = characters.reduce((acc, c) => acc += c.name.length, 0);
console.log('totalNameCharacters ::>', totalNameCharacters);
*/

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
/*
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
*/

//***EVERY***
/*
//1. Does every character have blue eyes?
const allBlueEyes = characters.every(c => c.eye_color === 'blue');
console.log('allBlueEyes ::>', allBlueEyes);
//2. Does every character have mass more than 40?
const allMore40 = characters.every(c => c.mass > 40);
console.log('allMore40 ::>', allMore40);
//3. Is every character shorter than 200?
const all200Shorter = characters.every(c => c.height < 200);
console.log('all200Shorter ::>', all200Shorter);
//4. Is every character male?
const allMale = characters.every(c => c.gender === 'male');
console.log('allMale ::>', allMale);
*/

//***SOME***
//1. Is there at least one male character?
const hasMale = characters.some(c => c.gender === 'male');
console.log('hasMale ::>', hasMale);
//2. Is there at least one character with blue eyes?
const hasBlueEye = characters.some(c => c.eye_color === 'blue');
console.log('hasBlueEye ::>', hasBlueEye);
//3. Is there at least one character taller than 210?
const hasTallerThan210 = characters.some(c => c.height > 210);
console.log('hasTallerThan210 ::>', hasTallerThan210);
//4. Is there at least one character that has mass less than 50?
const hasMassLess50 = characters.some(c => c.mass < 50);
console.log('hasMassLess50 ::>', hasMassLess50);
