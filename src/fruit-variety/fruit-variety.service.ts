import { Injectable } from '@nestjs/common'
import { FruitVariety } from './fruitvariety.model'
import { RestService } from '../nest-utils/rest.service'
import { randomInteger, removeItemOnce } from 'src/utils/tsUtils'
import { fruitData, fruitVarietiesData } from '../fruit/fruits.seed'

@Injectable()
export class FruitVarietyService implements RestService<FruitVariety> {
    init() {
        this.fruitVarities = fruitVarietiesData
    }

    public fruitVarities: FruitVariety[]

    constructor() {
        this.init()
    }

    get(id: string): FruitVariety {
        return this.fruitVarities.find(f => f.id == id)
    }

    getAllWithProperty?(property: string): FruitVariety[] {
        return this.fruitVarities.filter(f => f.fruit_id == property)
    }

    update(id: string, f: FruitVariety): FruitVariety {
        const updatedfruitVariety = { ... this.get(id), ...f }
        // Remove it 
        this.remove(updatedfruitVariety.id)
        // Add it again 
        this.fruitVarities = [...this.fruitVarities, f]
        return updatedfruitVariety
    }

    remove(id: string): FruitVariety {

        const f = this.get(id)
        this.fruitVarities = removeItemOnce(this.fruitVarities, f)
        return f

    }

    add(f: FruitVariety): FruitVariety {
        f = { ...f, id: randomInteger().toString() }
        this.fruitVarities = [...this.fruitVarities, f]
        return f
    }

    getAll?(): FruitVariety[] {
        return this.fruitVarities
    }
}
