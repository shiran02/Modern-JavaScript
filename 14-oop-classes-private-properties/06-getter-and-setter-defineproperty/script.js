
//constructor Function -----------------
function Person(firstName,lastName){
    this._firstName = firstName;
    this._lastName = lastName;

    Object.defineProperty(this,'firstName',{
        get: function(){
            return this.capitalizeFirst(this._firstName);
        },
        set:function(value){
            this._lastName = value;
        },
    });

    Object.defineProperty(this,'lastName',{
        get: function(){
            return  this.capitalizeFirst(this._lastName);
        },
        set:function(value){
            this._lastName = value;
        },
    });

    Object.defineProperty(this,'fulName',{
        get: function(){
            return  this.firstName +' '+ this.lastName;
        },
        
    });
}

Person.prototype.capitalizeFirst = function(value){
    return value.charAt(0).toUpperCase() + value.slice(1);
}

// Object Literal ----------------------

const PersonObj = {
    _firstName : 'Shiran',
    _lastName : 'Kumarsingha',

    get firstName(){
        return Person.prototype.capitalizeFirst(this._firstName);
    },


    set firstName(value){
        this._firstName = value;
    },

    get lastName(){
        return Person.prototype.capitalizeFirst(this._lastName);
    },


    set lastName(value){
        this._lastName = value;
    },

    get fulName(){
        return this.firstName +' '+ this.lastName;
    }
}




const person1 = new Person('shiran','kumarasingha');
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fulName);


const person2 = new Object.create(PersonObj);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fulName);