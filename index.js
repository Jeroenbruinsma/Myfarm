class Farm {
    constructor(name) {
      this.name = name
      this.crops = []
      this.animals = []
    }
    isVegan() {
        return this.animals.length === 0;
    }
    addCrop(crop) {
      this.crops.push(crop)
    }
    calculateIncome() {
        const arrIncomeCrops = this.crops.map(crop => crop.getYieldInEuros())
        const arrIncomeAnimals= this.animals.map(animal => animal.getYieldInEuros())

       
        const incomeCrops =  this.calculateIncommeCrops()
        const incomeAnimals = this.calculateIncommeAnimals()
        const income =  incomeCrops + incomeAnimals
        
        return income
      }
      addAnimal(newAnimal){
          this.animals.push(newAnimal)
      }
      calculateIncommeCrops(){
        return this.crops.map(crop => crop.getYieldInEuros()).reduce((total, amount) => total  + amount,0)
      }
      calculateIncommeAnimals(){
        return this.animals.map(animal => animal.getYieldInEuros()).reduce((total, amount) => total  + amount,0)
      }
      calculateMaxIncomeCrops(){
        //return this.animals.map(animal => animal.getYieldInEuros()).reduce((total, amount) => total  + amount,0)
      }
      farmStats(){

        const  logo =  "*****MyFarmStats*****"
        console.log(logo) 
        console.log("FarmName:",this.name )                      
        console.log("Total income:",this.calculateIncome() )                      
        console.log(`This is a ${ this.isVegan() ? 'vegan' : 'non-vegan'} farm`)   

         
      }

  }
  module.exports.Farm = Farm