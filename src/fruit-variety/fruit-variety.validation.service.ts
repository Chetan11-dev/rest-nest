/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common'
import { FruitVariety } from './fruitvariety.model'
import { notArraysEqual, removeItemOnce } from '../utils/tsUtils'
import { samplefruitvariety } from '../fruit/fruits.seed'
import { samplefruit } from '../fruit/fruits.seed'


@Injectable()
export class FruitVarietyValidationService {

    filterFruits(fs: FruitVariety[], isIdRequired = true, areAllPropertiesRequired = true): FruitVariety[] {
        const ls = fs.filter((f) => {
            let keys = Object.keys(f)

            if (isIdRequired) {
                if (!keys.includes('id')
                ) return false
            }

            if (areAllPropertiesRequired) {
                keys = removeItemOnce(keys, 'id')
                let sampleKeys = Object.keys(samplefruitvariety)
                sampleKeys = removeItemOnce(sampleKeys, 'id')
                if (notArraysEqual(keys, sampleKeys)) {
                    return false
                }
            }
            return true
        })
        return ls
    }

}