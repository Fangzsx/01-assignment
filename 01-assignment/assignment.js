/*
const country = 'Philippines';
const continent = 'South East Asia';
let population = 112321181;
const isIsland = true;
const language = 'filipino';
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

// 4
// 617
// 23
// false

/!*
const numNeighbors = prompt('How many neighbour countries does your country have?');

if(Number(numNeighbors) ===  1){
    console.log('Only 1 border!');
}
else if(Number(numNeighbors) > 1){
    console.log('More than 1 border!');
}

else{
    console.log('No border!');
}*!/


const sarahLanguage = 'english';
const sarahPopulation = 50000000;
const sarahIsland = false;

if(language === sarahLanguage && population <= sarahPopulation && isIsland === sarahIsland){
    console.log('You should live in ' + country);
}
else{
    console.log(country + ' does not meet your criteria.')
}

switch (language){
    case 'chinese':
    case 'mandarin' :
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language');
        break;
}

let average;

population > 33000000 ? average = 'above' : average = 'below';

console.log(country + '\'s ' + 'population is ' + average +' average');
*/

function describeCountry(country, population, capitalCity){
    return `${country} has ${population} and its capital city is ${capitalCity}`;
}

const description1 = describeCountry('Philippines1', 112, 'Manila1');
const description2 = describeCountry('Philippines1', 112, 'Manila2');
const description3 = describeCountry('Philippines1', 112, 'Manila3');

console.log(description1);
console.log(description2);
console.log(description3);

function percentageOfWorld1(population){
    return population / 7900 * 100;
}

const ph1Percentage = percentageOfWorld1(112);
const ph2Percentage = percentageOfWorld1(212);
const ph3Percentage = percentageOfWorld1(312);

console.log(ph1Percentage);
console.log(ph2Percentage);
console.log(ph3Percentage);

const percentageOfWorld2 = function(population){
    return population / 7900 * 100;
}

const ph4Percentage = percentageOfWorld2(112);
const ph5Percentage = percentageOfWorld2(212);
const ph6Percentage = percentageOfWorld2(312);

console.log(ph4Percentage);
console.log(ph5Percentage);
console.log(ph6Percentage);

const percentageOfWorld3 = population => Number(population / 7900 * 100);

const ph7Percentage = percentageOfWorld3(112);
const ph8Percentage = percentageOfWorld3(212);
const ph9Percentage = percentageOfWorld3(312);

console.log(ph7Percentage);
console.log(ph8Percentage);
console.log(ph9Percentage);

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld3(population);
    return `${country} has ${population} million people, which is about ${percentage} % of the world. `;
}

const descriptionPH = describePopulation('Philippines', 112);
console.log(descriptionPH);





