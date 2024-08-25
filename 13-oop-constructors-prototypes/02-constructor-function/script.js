// constructor function ------------------



function Rectangle(name,width,height){
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function(){
        return this.height * this.width;
    }
}

// We can create as many instances of our Rectangle objects as we want using the `new` keyword
const rec1 = new Rectangle('Rectangle' , 10,20);
const rec2 = new Rectangle('Rectangle' , 10,20);
console.log(rec1.area());
console.log(rec2.area());

// When we use the `new` keyword, 4 things happen:
// 1. A new empty object is created.
// 2. The constructor function is called with the arguments that we passed in.
// 3. The `this` keyword is set to the new empty object.
// 4. The new object is returned from the constructor function.

