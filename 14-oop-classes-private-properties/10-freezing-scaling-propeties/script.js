// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed

const rectObj = {
  name : 'Rectangle 1',
  width : 10,
  height:20,
}

Object.seal(rectObj);

let descriptor = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptor);


// after sealing can not change , add and remove propeties---
// But Can chanenge value
rectObj.color = 'red';
delete rectObj.name;
rectObj.width = 30;

console.log(rectObj);


// -------------------------------------- frezing example -----

const circleObj = {
  name : 'Circle 1',
  radius : 20,
};
// Can not add, remove or modify
Object.freeze(circleObj);


descriptors = Object.getOwnPropertyDescriptor(circleObj);

circleObj.color = 'red';
delete circleObj.name;
circleObj.name = 'New Name';

console.log(descriptor);


// If an object is frozen, it is also sealed
console.log('rectObj is sealed?', Object.isSealed(rectObj));
console.log('rectObj is frozen?', Object.isFrozen(rectObj));
console.log('circleObj is sealed?', Object.isSealed(circleObj));
console.log('circleObj is frozen?', Object.isSealed(circleObj));