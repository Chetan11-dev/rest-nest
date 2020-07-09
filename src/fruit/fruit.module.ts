import { Module } from '@nestjs/common'
import { FruitService } from './fruit.service'
import { FruitController } from './fruit.controller'

@Module({
  providers: [FruitService],
  controllers: [FruitController]
})
export class FruitModule { }
