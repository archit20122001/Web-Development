function sum (a,b){
    return a+b;
}

function expect(actual){
    return {
        toBe(expected){
            if(actual !== expected){
                throw new Error (`${actual} is not equal to ${expected}`);
            }
        },
    }
}

let actual = sum(4,2);
let expected = 7;

expect(actual).toBe(expected);