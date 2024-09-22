let d;

d = new Date();

d = new Date(2024, 8, 29, 12, 34, 0);

d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2012 12:30:00');

d = new Date('2022-07-10'); //year first & hyphen date could be wrong

d = new Date('07-10-2032');

// timestamp

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1726963216798);

d = Math.floor(Date.now() / 1000);

console.log(d, typeof d);