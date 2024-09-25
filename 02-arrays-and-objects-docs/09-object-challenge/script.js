const library = [
  {
    title: 'Whatever you want',
    author: 'Bea Author',
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: 'Whatever I want',
    author: 'Cee Author',
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: 'Whatever we want',
    author: 'Dee Author',
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
];

console.log(library);

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

const { title: firstBook } = library[0]

console.log(firstBook);

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);