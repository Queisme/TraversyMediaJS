const socials = ['Twitter', 'LinkedIn', 'Insta', 'Threads'];
/*
//console.log(socials.__proto__);

socials.forEach(function(social){
  console.log(social);
});

socials.forEach(item => console.log(`Items: ${item}`));

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));
function logSocials(social){
  console.log(social);
}

socials.forEach(logSocials);
*/

const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Threads', url: 'https://threads.com' },
  { name: 'Insta', url: 'https://instagram.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
];

socialObjs.forEach(item => console.log(item.url));