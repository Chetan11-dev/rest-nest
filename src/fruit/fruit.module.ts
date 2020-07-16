import { Module } from '@nestjs/common'
import { FruitService } from './fruit.service'
import { FruitController } from './fruit.controller'
import { FruitVarietyService } from 'src/fruit-variety/fruit-variety.service'
import { FruitValidationService } from './fruit.validation.service'

@Module({
  providers: [FruitService, FruitVarietyService, FruitValidationService],
  controllers: [FruitController],
  exports: [FruitService, FruitValidationService]
})

export class FruitModule { }
