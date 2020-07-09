import { Test, TestingModule } from '@nestjs/testing'
import { FruitController } from './fruit.controller'
import { FruitService } from './fruit.service'
import { Fruit } from './fruit.model'

describe('Fruit Controller', () => {
  let controller: FruitController
  let service: FruitService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FruitController],
      providers: [FruitService]
    }).compile()

    controller = module.get<FruitController>(FruitController)

    service = module.get<FruitService>(FruitService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should return fruits', async function () {
    jest.spyOn(service, 'getFruits').mockReturnValue([])

    expect(controller.getFruits()).toBeInstanceOf(Array)
  }
  )

  it('should return a fruit', async function () {
    const fruit: Fruit = {
      name: "Apple",
      origin: "Afganistan",
      largestCountry: "India",
      productionInBillions: 1.5,
    }

    jest.spyOn(service, 'getFruit').
      mockReturnValue(fruit)

    console.log(controller.getFruit("1"))
    expect(controller.getFruit("1")).
      toStrictEqual(fruit)
  }

  )

})


