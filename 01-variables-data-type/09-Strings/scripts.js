const name = 'shiran';
const age = 31;



x = 'Hello , My Name' + name+ 'a I am ' + age + ' Years old';

// Templete Literals

x = `Hello My Name is ${name} and I am ${age} + Yeasr Old`;


// Strings Properties And Methods 

const s = 'Hello World';
const s1 = new String('shiran kunarasingha');
x = typeof s1
//x = s.length


// acess value By Key

x = s1[1];

// ---

x = s.__proto__;
x = s.toLowerCase();
x = s.toUpperCase();

x = s.charAt(0);

x = s.indexOf('H')

x = s.substring(0,4);

x = s.slice(0,4); // starting in thr end 
x = s.slice(-5,-1); // starting in thr end 

x = '   Hwllo world';
x = x.trim(); // trim remove the white spaces 

x = s.replace('World' , 's')

x = s.includes('s')



console.log(x);