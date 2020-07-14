import { Module } from '@nestjs/common'
import { FruitVarietyService } from './fruit-variety.service'
import { FruitVarietyController } from './fruit-variety.controller'
import { FruitModule } from 'src/fruit/fruit.module'
import { FruitValidationService } from 'src/fruit/fruit.validation.service'
import { FruitService } from 'src/fruit/fruit.service'
import { FruitVarietyValidationService } from './fruit-variety.validation.service'

@Module({
  providers: [FruitVarietyService, FruitValidationService, FruitVarietyValidationService],
  controllers: [FruitVarietyController],
  imports: [FruitModule]
})
export class FruitVarietyModule { }
