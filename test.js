// Import the function from app.js
const { sum, fromEuroToDollar } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("adds 14 + 9 to equal 23", function(){
let result= sum(14 , 9);
expect(result).toBe(23)
})