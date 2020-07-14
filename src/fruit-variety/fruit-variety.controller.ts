import { Controller, Get, Post, Delete, Put, Param, Body, Patch, BadRequestException } from '@nestjs/common'
import { FruitValidationService } from 'src/fruit/fruit.validation.service'
import { FruitVariety } from './fruitvariety.model'
import { FruitVarietyService } from './fruit-variety.service'
import { FruitVarietyValidationService } from './fruit-variety.validation.service'

@Controller('fruit-variety')
export class FruitVarietyController {
    constructor(
        private service: FruitVarietyService,
        private validationService: FruitVarietyValidationService
    ) { }

    // Fruits Vareity
    @Get()
    getFruitVarieties(): FruitVariety[] {
        return this.service.getAll()
    }


    // Fruits Vareity
    @Get(':id')
    getFruitVariety(@Param('id') id: string): FruitVariety[] {
        return this.service.getAllWithProperty(id)
    }

    @Post()
    addFruitVariety(@Body() fs: FruitVariety[]) {

        fs = this.validationService.filterFruits(fs, false)


        fs.forEach(f => {
            return this.service.add(f)
        }
        )

        return "Sucessfully added " + fs.length + " vareities!!"
    }

    @Patch()
    updateFruitVariety(@Body() fs: FruitVariety[]) {
        fs = this.validationService.filterFruits(fs, true, false)
        fs.forEach(f => this.service.update(f.id, f))
        return "Sucessfully updated " + fs.length + " fruits!!"
    }

    @Delete()
    deleteFruitVarieties(@Body() fs: FruitVariety[]) {
        fs = this.validationService.filterFruits(fs, true, false)

        fs.forEach(f => {
            this.service.remove(f.id)
        })

        return "Sucessfully deleted " + fs.length + " fruits"
    }
}
