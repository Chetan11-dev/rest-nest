import { timer300 } from '../asynUtils'
describe(' test', () => {

    it('should ', () => {

        expect(1).not.toBe(2)
    })

    it('should ', async () => {
        await timer300()
        expect(1).not.toBe(2)
    })

})