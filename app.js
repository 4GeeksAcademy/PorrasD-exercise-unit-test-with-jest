
let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs["USD"]; 
    let yen = euros * oneEuroIs["JPY"];    
        return yen;
}

function sum(num1, num2) {
    return num1 + num2;
}

function fromYenToPound(yen) {
    let euros = yen / oneEuroIs["JPY"];     
    let pounds = euros * oneEuroIs["GBP"];  
    return pounds;
}
module.exports= {sum, fromEuroToDollar}