import { getDay, checkValid, Year, } from './../src/backend.js'

describe('Day function', () => {
  test("should return the day of the given date object", () => {
    let date = new Date ('November 14 2019');
    getDay(date);
    expect(getDay(date)).toEqual('Thursday')
  });
});
describe('Check Valid', () => {
  test('should check if the date is a valid date', () =>{
    let input = new Year (2016)
    input.checkLeapYear();
    expect(checkValid(3, 31, 2016)).toEqual(false)
  });
});
