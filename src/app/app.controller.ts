import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { FruitService } from '../fruit/fruit.service'
import { FruitVarietyService } from '../fruit-variety/fruit-variety.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, private readonly fruitService: FruitService, private readonly fruitVarietyService: FruitVarietyService) { }

  @Get()

  getHello(): string {
    return this.appService.getHello()
  }

  @Get('/reset')
  reset(): string {
    this.fruitService.init()
    this.fruitVarietyService.init()
    return "Successfully reseted app"
  }
}
