import { Fruit } from './fruit.model'

export interface FruitServiceI {
    updateFruit(f: Fruit): void
    removeFruit(id: string): void
    addFruit(f: Fruit): void
    getFruit(id: string): Fruit
    getFruits(): Fruit[]
}
