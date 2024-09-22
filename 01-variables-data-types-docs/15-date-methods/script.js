let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth(); //months are zero based. Just add a 1.

x = d.getDate(); //21
x = d.getDay(); //6 //Saturday

x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // 2024-9-21

// Time API

x = Intl.DateTimeFormat('en-US').format(d); // 09/21/2024
x = Intl.DateTimeFormat('en-GB').format(d); // 21/09/2024
x = Intl.DateTimeFormat('default').format(d); // 09/21/2024

x = Intl.DateTimeFormat('default', { month: 'long'}).format(d); 

x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/Chicago'
});


console.log(x);