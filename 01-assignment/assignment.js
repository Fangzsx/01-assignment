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



