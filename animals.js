class Animal {
    constructor(name) {
       this.name  = "ToBeGiven"
    }
    getYieldInEuros(){
       
       return this.getWeightInKg() * this.price    
    }
 
}

class Pig extends Animal{
    constructor(age){
        super()
        this.age = age
        this.weight = age * 2.3
        this.price = 4
        this.maxWeight = 1200

    }
    getWeightInKg(){
        return Math.min(this.weight,this.maxWeight)
    }
}

class Cow extends Animal{
    constructor(age){
        super()
        this.age = age
        this.weight = age * 1.5
        this.price = 5
        this.maxWeight = 1200

    }
    getWeightInKg(){
        return Math.min(this.weight,this.maxWeight)
    }
}

class Horse extends Animal{
    constructor(age){
        super()
        this.age =  age
        this.weight = age * 1.7
        this.price = 10
        this.maxWeight = 1000
    }
    getWeightInKg(){
        return Math.min(this.weight,this.maxWeight)
    }

}
module.exports = {Horse,Pig,Cow}
//On top of this formula there is a maximum for the weight of each animal.
//  FYou can use the Math.min function for this purpose. 








