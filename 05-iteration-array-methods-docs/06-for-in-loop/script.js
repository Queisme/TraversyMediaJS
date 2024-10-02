const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
  color5: 'yellow',
  color6: 'purple',
};

for(const key in colorObj){
  console.log(key, colorObj[key]);
}

const colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for(const index in colorArr){
  console.log(index, colorArr[index]);
};