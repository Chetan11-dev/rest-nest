/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common'
import { Fruit } from './fruit.model'
import { FruitServiceI } from './fruitI.service'

@Injectable()
export class FruitService implements FruitServiceI {
    updateFruit(f: Fruit) {
        // return true
    }
    removeFruit(id: string) {
        // return true
    }
    addFruit(f: Fruit) {
        // return true
    }
    getFruit(id: string): Fruit {
        return {
            name: "string",
            origin: "string",
            largestCountry: "string",
            productionInBillions: 0,
        }
    }
    getFruits() {
        return []
    }
}

