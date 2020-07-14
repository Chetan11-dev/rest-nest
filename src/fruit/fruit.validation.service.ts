/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, BadRequestException } from '@nestjs/common'
import { Fruit } from './fruit.model'
import { RestService } from '../nest-utils/rest.service'
import { inherits } from 'util'
import { fruitData, samplefruit, samplefruitvariety } from './fruits.seed'
import { FruitVariety } from '../fruit-variety/fruitvariety.model'
import { notArraysEqual } from 'src/utils/tsUtils'
import { FruitService } from './fruit.service'


@Injectable()
export class FruitValidationService {

    constructor(private service: FruitService) { }

    // Validators 
    validateFruitExists(f: Fruit) {
        const fruitExists = this.service.findFruitByName(f.name)

        if (fruitExists) {
            throw new BadRequestException("Hmm We already have that fruit we don;t seem to need it.")
        }
    }

    validateFruit(f: Fruit) {
        if (notArraysEqual(Object.keys(f), Object.keys(samplefruit))) {
            throw new BadRequestException("Fruits dont have all details. We only accept  complete fruits.")
        }
    }

    // validateFruitVariety(f: FruitVariety) {
    //     if (notArraysEqual(Object.keys(f), Object.keys(samplefruitvariety))) {
    //         throw new BadRequestException("FruitVariety dont have all details.")
    //     }
    // }

    validateWeHaveFruit(id: string) {
        if (!this.service.exists(id)) {
            throw new BadRequestException("Hmm We don't have that fruit yet.")
        }
    }
}