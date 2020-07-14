import { Controller, Get, Post, Delete, Put, Param, Body, Patch, BadRequestException } from '@nestjs/common'
import { FruitService } from './fruit.service'
import { Fruit } from './fruit.model'
import { FruitVariety } from '../fruit-variety/fruitvariety.model'
import { FruitValidationService } from './fruit.validation.service'


@Controller('fruit')
export class FruitController {
    constructor(private service: FruitService,
        private validationService: FruitValidationService,
    ) { }

    // Fruits   
    @Get(':id')
    getFruit(@Param('id') id: string): any {
        return this.service.get(id)
    }

    @Get()
    getFruits() {
        return this.service.getAll()
    }


    @Delete(':id')
    removeFruit(@Param('id') id: string) {
        this.validationService.validateWeHaveFruit(id)
        return `Bye Bye ${this.service.remove(id).name} we will miss you.`
    }

    @Patch(':id')
    updateFruit(
        @Param('id') id: string,
        @Body() fruit: Fruit) {
        // How will we update if we don't have that fruit yet
        this.validationService.validateWeHaveFruit(id)
        return this.service.update(id, fruit)
    }

    @Post()
    addFruit(@Body() f: Fruit) {
        // Validate fruit have all properties 
        this.validationService.validateFruit(f)

        // check if fruit already exists         
        this.validationService.validateFruitExists(f)

        this.service.add(f)
        return "Sucessfully added " + f.name + " Yummy Yummy!!"
    }
}