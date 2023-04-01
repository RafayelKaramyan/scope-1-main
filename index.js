//1.Create function "multiply" to multiple values as shown below.//       
function multiply(a) {
    return function (b) {
        return function (c)  {
            return a * b * c
        }
    }
}
console.log(multiply(3)(3)(3));
console.log(multiply(2)(4)(6));


//2.Number generator

const createCounter = (count = 0) => () => ++count

const counter = createCounter(44);

console.log(counter());
console.log(counter()); 
console.log(counter()); 

