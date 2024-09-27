//Not in the global scope anymore

(function(){
  const user = 'Chris';
  console.log(user);
  const hello = () => console.log(`Hello from the IFFE!`);
  hello();
})();

(function(name){
  console.log(`Hello ${name}`);
})('Shorty');

(function hello(){
  console.log('Hiya');
})();