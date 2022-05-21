const country = 'Philippines';
const continent = 'South East Asia';
let population = 112321181;
const isIsland = true;
const language = 'Filipino'
let halfPopulation = population / 2;
let description = country +  ' is in ' + continent + ', and its ' + population + ' people speak ' + language;


console.log(country);
console.log(continent);
console.log(halfPopulation);
console.log(isIsland);
console.log(language);
console.log(description);

if(population > 33000000){
    console.log(country + '\'s' + ' population is above average.');
}else{
    console.log(country + '\'s' + 'population is below average.');
}

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//4
//617
//23
//false
//114

const numNeighbors = prompt('How many neighbour countries does your country have?');

if(Number(numNeighbors) ===  1){
    console.log('Only 1 border!');
}
else if(Number(numNeighbors) > 1){
    console.log('More than 1 border!');
}

else{
    console.log('No border!');
}