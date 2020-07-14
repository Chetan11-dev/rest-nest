import { FruitVarietyValidationService } from './fruit-variety.validation.service'

it('should pass', () => {
    const service = new FruitVarietyValidationService()
    const fs = [
        { name: "A", fruit_id: "", taste: "", },]

    // expect(Object.keys(fs[0]).includes('id')).toBeFalsy()

    // expect(Object.keys(fs[0]).includes('id')).toBeFalsy()

    expect(service.filterFruits([
        { name: "A", fruit_id: "", taste: "", },], false)).toHaveLength(1)

    expect(service.filterFruits([
        { name: "A", fruit_id: "", taste: "", },], true)).toHaveLength(0)

})