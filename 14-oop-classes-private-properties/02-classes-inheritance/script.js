//parent class
class Shape{
    constructor(name){
        this.name = name;
    }

    logName(){
        console.log('Shape Name :'+ this.name);
    }
}


//sub class
class Rectangle extends Shape{
    constructor(name,width,height){
        
        // call the super class constructor
        // so we need to pass name so we pass name

        super(name);  

        this.width = width;
        this.height = height;
    }
}

//sub class
class Circle extends Shape{
    constructor(name,radius){
        
        // call the super class constructor
        // so we need to pass name so we pass name

        super(name);  
        this.radius = radius;
    }

    logName(){
        console.log('Circle Name ' + this.name);
    }
}



const rect = new Rectangle('Rect 1' , 34,23);
console.log(rect);
rect.logName()

const cir = new Circle('Circle 1' , 34);
console.log(cir);
cir.logName()