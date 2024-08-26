class Person{
    constructor(firstName,lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        return capitalizeFirst(this._firstName);
    }

    set firstName(value){
        this._firstName = this.capitalizeFirst(value);
    }

    set lastName(value){
        this._lastName = this.capitalizeFirst(value);
    }

    capitalizeFirst(value){
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    get fulName(){
        return `${this._firstName + this._lastName}`;
    }
}


const person1 = new Person('john','doe');
console.log(person1.firstName);

person1.firstName = 'Shiran';
person1.lastName = 'kumarasingha';


console.log(person1._firstName);