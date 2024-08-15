// Loop through arrays ----

const items = ["book", "table", "chair", "kite"];
const users = [
  {
    name: "Bard",
  },
  {
    name: "shiran",
  },
  {
    name: "kumara",
  },
  {
    name: "singha",
  },
];

for (const item of items) {
  console.log(item);
}

for(const user of users){
    console.log(user);
}

// Loop Over String ------

const str = 'Hello Shiran';

for(const letter of str){
    console.log(letter);
}

// loop over Maps -------------


const map = new Map();
map.set('name','shiran');
map.set('age',23);
map.set('id',2);

for(const [key ,value] of map){
    console.log(key ,value);
}

for(const [key] of map){
    console.log(key);
}

