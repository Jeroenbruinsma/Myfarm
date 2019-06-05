
const { Farm } = require('./index')
const { Wheat,Sugarcane } = require('./crops')
const {Cow,Horse,Pig} = require('./animals')

test('Test the whole farm', () => {
    const farm = new Farm("Tonys_farm")
    farm.addAnimal(new Cow(100))
    farm.addAnimal(new Cow(100))
    farm.addAnimal(new Pig(50))
    farm.addAnimal(new Horse(200))
    farm.addAnimal(new Horse(200))
    farm.addCrop(new Wheat(100))
    farm.addCrop(new Sugarcane(200))


    expect(farm.calculateIncome()).toBeCloseTo(11715,0)
  })
  test("Call FarmStats should not throw error", () => {
      const farm = new Farm("Tonys_farm")
      farm.addAnimal(new Horse(300))
      farm.farmStats()
  })
