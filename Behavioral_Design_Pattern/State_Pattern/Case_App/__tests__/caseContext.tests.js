const caseContext = require('../App');

test('Case context', () => {
    expect(caseContext.write('Monday')).toEqual('monday')
    expect(caseContext.write('Tuesday')).toEqual('TUESDAY')
    expect(caseContext.write('Wednesday')).toEqual('WEDNESDAY')
    expect(caseContext.write('Thursday')).toEqual('thursday')
    expect(caseContext.write('Friday')).toEqual('FRIDAY')
    expect(caseContext.write('Saturday')).toEqual('SATURDAY')
    expect(caseContext.write('Sunday')).toEqual('sunday')
});
