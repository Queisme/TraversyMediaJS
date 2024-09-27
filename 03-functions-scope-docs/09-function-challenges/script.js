const getCelsius = tempF => ((tempF - 32) * 5/9).toFixed(2);
console.log(`The temperature in Celsius is: C ${getCelsius(13)}\xB0`);

const getFarah = tempC => ((tempC * 9/5) + 32).toFixed(2);
console.log(`The temperature in Fahrenheit is: F ${getFarah(13)}\xB0`);

const minMax = arr => ({ min: Math.min(...arr), max: Math.max(...arr)});
console.log(minMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

(function(length, width){
  const area = width * length;
  console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);
})(20, 10);