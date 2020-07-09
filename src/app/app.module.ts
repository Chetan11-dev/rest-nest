import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FruitModule } from 'src/fruit/fruit.module'

@Module({
  imports: [FruitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
