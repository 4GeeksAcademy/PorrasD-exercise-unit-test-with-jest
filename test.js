const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function () {

    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745); 
})

test("adds 14 + 9 to equal 23", function () {
    let result = sum(14, 9);
    expect(result).toBe(23)
})
test("One dollar should be X yen", function () {
    const yen = fromDollarToYen(10);  
    const expected = 10 * 156.5;
    expect(yen).toBeCloseTo(expected, 2); 
})

test("One yen should be X pounds", function () {
    const pounds = fromYenToPound(1000); 
    const expected = 1000 / 156.5 * 0.87;

    expect(fromYenToPound(1000)).toBeCloseTo(expected, 2); 
})