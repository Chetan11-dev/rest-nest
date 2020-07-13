import { Test, TestingModule } from '@nestjs/testing'
import { FruitController } from './fruit.controller'
import { FruitService } from './fruit.service'
import { Fruit } from './fruit.model'

describe('Fruit Controller', () => {
  let controller: FruitController
  let service: FruitService

  // Initialize tests
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

  // Verify FruitService.getFruits is called by controller   
  it('should return fruits', async function () {
    jest.spyOn(service, 'getFruits').mockReturnValue([])
    expect(controller.getFruits()).toBeInstanceOf(Array)
  }
  )

  // Verify FruitService.getFruit is called by controller   
  it('should return a fruit', async function () {
    const fruit: Fruit = {
      name: "Apple",
      origin: "Afganistan",
      largestCountry: "India",
      productionInBillions: 1.5,
    }

    jest.spyOn(service, 'getFruit').
      mockReturnValue(fruit)

    expect(controller.getFruit("1")).
      toStrictEqual(fruit)
  }

  )

})


