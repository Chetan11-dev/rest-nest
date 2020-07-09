import { Controller, Get, Post, Delete, Put, Param, Body, Patch, BadRequestException } from '@nestjs/common'
import { FruitService } from './fruit.service'
import { Fruit } from './fruit.model'
import { FruitServiceI } from './fruitI.service'
import { arraysEqual, notArraysEqual } from 'src/utils/tsUtils'
import { fruits, fruit } from './fruits.seed'

@Controller('fruit')
export class FruitController {
    constructor(private service: FruitService) { }

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
        return `Bye Bye ${this.service.removeFruit(id).name} we will miss you.`
    }

    @Patch(':id')
    updateFruit(
        @Param('id') id: string,
        @Body() fruit: Fruit) {
        return this.service.updateFruit(id, fruit)
    }

    @Post()
    addFruit(@Body() f: Fruit) {
        if (
            notArraysEqual(Object.keys(f), Object.keys(fruit))
        ) {
            throw new BadRequestException("Fruits dont have all details. We all complete fruits.")
        }
        this.service.addFruit(f)
        return "Sucessfully added " + f.name + " Yummy Yummy!!"
    }
}
