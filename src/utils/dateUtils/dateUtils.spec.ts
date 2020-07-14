import { diffDate, diffDateToStr } from './dateUtils'

// Verify behaiour of Date utils 
describe(' test', () => {
    it('should ', () => {
        expect(diffDate(new Date("06/10/2020"), new Date("07/10/2020"))).toStrictEqual({ result: '30d', Days: 30, Mins: 43200, Hours: 720 })
        expect(diffDateToStr(new Date("06/10/2020"), new Date("07/10/2020"))).toStrictEqual('30d ago')
    })
})

