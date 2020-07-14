import { Fruit } from './fruit.model'
import { FruitVariety } from '../fruit-variety/fruitvariety.model'

// For Comparision 
export const samplefruit: Fruit = {
    name: "Apple",
    origin: "Spain",
    largestCountry: "India",
    productionInBillions: 1.5,
}

// For Comparision 
export const samplefruitvariety: FruitVariety = {
    name: "Apple",
    fruit_id: "-1",
    taste: "tangy"
}

export const fruitData: Fruit[] = [
    {
        id: "0",
        name: "Apple",
        origin: "Spain",
        largestCountry: "India",
        productionInBillions: 1.5,
    }, {
        id: "1",
        name: "Mango",
        origin: "India",
        largestCountry: "India",
        productionInBillions: 1.9,
    }, {
        id: "2",
        name: "Avocados",
        origin: "America",
        largestCountry: "America",
        productionInBillions: 1.9,
    }, {
        id: "3",
        name: "PassionFruit",
        origin: "America",
        largestCountry: "America",
        productionInBillions: 1.7,
    }]

export const fruitVarietiesData: FruitVariety[] = [
    {
        id: "0",
        name: "Langra",
        taste: "sweet",
        fruit_id: "1" // Mango  

    },
    {
        id: "1",
        name: "Dushari",
        taste: "very sweet",
        fruit_id: "1"

    },

    {
        id: "2",
        name: "Desert Apple",
        taste: "Sallow",
        fruit_id: "0" // Apple  

    },
    {
        id: "3",
        name: "Autumn Glory",
        taste: "very sweet",
        fruit_id: "0"
    },
]
