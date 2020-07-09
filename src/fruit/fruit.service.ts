/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, BadRequestException } from '@nestjs/common'
import { Fruit } from './fruit.model'
import { FruitServiceI } from './fruitI.service'
import { inherits } from 'util'
import { fruits } from './fruits.seed'

@Injectable()
export class FruitService implements FruitServiceI {
    fruits: Fruit[]

    init() {
        this.fruits = fruits
    }

    constructor() {
        this.init()
    }


    updateFruit(id: string, f: Fruit): Fruit {
        // How will we update if we don't have that fruit yet
        if (!this.weHaveFruit(id)
        ) {
            throw new BadRequestException("Hmm We don't have that fruit yet.")
        }

        // Smarly override fruits
        const updatedfruit = { ... this.fruits[parseInt(id)], ...f }
        this.fruits[parseInt(id)] = updatedfruit
        return updatedfruit
    }

    private weHaveFruit(id: string) {
        if (this.findFruit(id)) {
            return true
        }
        else return false

    }

    private findFruit(id: string) {
        return this.fruits.find(currfruit => {
            if (id === currfruit.id) {
                return true
            }
            else
                return false
        })
    }

    removeFruit(id: string): Fruit {
        if (!this.weHaveFruit(id)
        ) {
            throw new BadRequestException("Hmm We don't have that fruit yet.")
        }
        return this.fruits.splice(parseInt(id), 1)[0]
    }
    // Sweet and Functional fruits I like them
    addFruit(f: Fruit): Fruit {
        const fruitExists = this.findFruitByName(f.name)

        if (fruitExists) {
            throw new BadRequestException("Hmm We already have that fruit we don;t seem to need it.")
        }

        const updatedFruit = { ...f, id: fruits.length.toString() }
        this.fruits = [...this.fruits, updatedFruit]
        return f
    }
    private findFruitByName(name: string) {
        return this.fruits.find(currfruit => {
            if (name == currfruit.name) {
                return true
            }
            else
                return false
        })
    }

    getFruit(id: string): Fruit {
        return this.fruits[parseInt(id)]
    }
    getFruits(): Fruit[] {
        return this.fruits
    }
}
