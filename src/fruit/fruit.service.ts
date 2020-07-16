/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common'
import { Fruit } from './fruit.model'
import { RestService } from '../nest-utils/rest.service'
import { inherits } from 'util'
import { fruitData } from './fruits.seed'
import { FruitVariety } from '../fruit-variety/fruitvariety.model'
import { Controller, Get, Post, Delete, Put, Param, Body, Patch, BadRequestException } from '@nestjs/common'
import { arraysEqual, notArraysEqual, randomInteger, removeItemOnce } from '../utils/tsUtils'

@Injectable()
export class FruitService implements RestService<Fruit> {
    init() {
        this.fruits = fruitData
    }

    fruits: Fruit[]

    constructor() {
        this.init()
    }


    update(id: string, f: Fruit): Fruit {
        // Smarly override fruits
        const updatedfruit = { ... this.get(id), ...f }
        this.add(this.remove(updatedfruit.id))
        return updatedfruit
    }


    remove(id: string): Fruit {
        const f = this.get(id)
        this.fruits = removeItemOnce(this.fruits, f)
        return f
    }


    // Sweet and Functional fruits I like them
    add(f: Fruit): Fruit {
        const updatedFruit = { ...f, id: randomInteger().toString() }
        this.fruits = [...this.fruits, updatedFruit]
        return f
    }

    get(id: string): Fruit {
        return this.fruits.find(f => f.id == id)
    }

    getAll(): Fruit[] {
        return this.fruits
    }

    findFruitByName(name: string) {
        return this.fruits.find(currfruit => {
            if (name == currfruit.name) {
                return true
            }
            else
                return false
        })
    }

    exists(id: string): boolean {
        const f = this.fruits.find(currfruit => {
            if (id === currfruit.id) {
                return true
            }
            else
                return false
        })

        if (f) {
            return true
        } else return false
    }
}
