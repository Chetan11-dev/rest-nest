import { Fruit } from './fruit.model'

export interface FruitServiceI {
    updateFruit(id: string, f: Fruit): Fruit
    removeFruit(id: string): Fruit
    addFruit(f: Fruit): Fruit
    getFruit(id: string): Fruit
    getFruits(): Fruit[]
}
