
const arr1 = [1, 4, 9, 16];

const map1 = arr1.map(number => number * 2);

console.log(map1); // [2, 8, 18, 32]

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const moreNumbers = numbers.map(number => `Number: ${number}`);
console.log(moreNumbers);


const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an array of company names

const companyNames = companies.map(company => company.name);
console.log(companyNames);

// Create an array with company + category

const companyCat = (companies.map(company => `${company.name}: ${company.category}`));
console.log(companyCat);

// Create an object with company + category

const companyCatObj = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
console.log(companyCatObj);

// Create an array of the length of each company in years

const companyYears = companies.map(company => company.end - company.start);
console.log(companyYears);

// Create an array of objects with the name and the legnth of each company in years

const companyYearsObj = companies.map(company => {
  return {
    name: company.name,
    years: company.end - company.start + ` years`,
  };
});
console.log(companyYearsObj);

// Chain map methods

// square a number then double it

const squareNdouble = numbers
  .map(number => Math.sqrt(number))
  .map(sqrt => sqrt * 2)
  .map(sqrtTrip => sqrtTrip * 3);

console.log(squareNdouble);

// Chainging different methods

const evenDouble = numbers
  .filter(number => number % 2 === 0)
  .map(even => even * 2);

console.log(evenDouble);