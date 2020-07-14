import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FruitModule } from 'src/fruit/fruit.module'
import { FruitVarietyModule } from 'src/fruit-variety/fruit-variety.module'

@Module({
  imports: [FruitModule, FruitVarietyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
