const apples: number = 5;
const oranges = 5;
let banana = 5;

let color: string[] = ["red", "blue"];
let nothing: null = null;

class Car {}
let car: Car = new Car();
let point: { x: number; y: number } = { x: 10, y: 5 };

// function
const logNumber: (i: number) => void = (i: number) => console.log(i);

// function in better way
const logNumber2 = (i: number): void => {
  console.log(i);
};

/*
Type annotations vs Type inference 
    Type annotations: we (developers) tell ts what is the type like: 
    let apples: number = 5;

    Type inference: ts will guess the type 
    let apple = 5


    we can rely on type inference except 3 case (type inference will guess it any)

    1- initialize variable without value 
    let x;  
    x= 1;
    
    x will be type of  any

    2- function that return any like JSON.parse
*/

const json = '{"x":20, "y":7}';
const coordinate = JSON.parse(json); // any because json.parse return any type
