
class Rectangle{
    constructor(name,width,height){
        super(name);  
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area(){
        return this.height * this.width;
    }

    static getClass(){
        return 'Rectangle';
    }
}


const rect = new Rectangle('Rect',10,21);
console.log(rect.area());


console.log(Rectangle.getClass());



