import { Controller, Get, Post, Delete, Put, Param, Body, Patch } from '@nestjs/common'
import { FruitService } from './fruit.service'
import { Fruit } from './fruit.model'
import { FruitServiceI } from './fruitI.service'

@Controller('fruit')
export class FruitController {
    constructor(private service: FruitServiceI) { }

    @Get(':id')
    getFruit(@Param('id') id: string): any {
        return this.service.getFruit(id)
    }

    @Get()
    getFruits() {
        return this.service.getFruits()
    }


    @Delete(':id')
    removeFruit(@Param('id') id: string) {
        return this.service.removeFruit(id)
    }

    @Patch(':id')
    updateFruit(
        @Param('id') id: string,
        @Body() fruit: Fruit) {
        return this.service.updateFruit(fruit)
    }
    @Post()
    addFruit(f: Fruit) {
        return this.service.addFruit(f)
    }
}
