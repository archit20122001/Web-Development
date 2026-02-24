class Human {
    age;
    #weight;
    height;

    constructor(newAge, newHeight, newWeight) {
        this.age = newAge;
        this.height = newHeight;
        this.#weight = newWeight;
    }

    walking() {
        console.log("I am walking");
    }

    running() {
        console.log("I am running");
    }

    get fetchWeight() {
        return this.#weight;
    }

    set modifyWeight(val) {
        this.#weight = val;
    }
}

let obj1 = new Human(23, 174, 63);
console.log(obj1.age);
console.log(obj1.height);
console.log(obj1.fetchWeight);
obj1.walking();

let obj2 = new Human(26, 180, 67);
console.log(obj2.age);
console.log(obj2.height);
console.log(obj2.fetchWeight);
obj2.walking();

function sayName1(Fname = "Rangnathan", Lname = "Swami") {
    console.log("My name is: ", Fname, Lname);
}

sayName1("Archit Kumar", "Singh");

function sayName2(Fname = "Rangnathan", Lname = Fname.toUpperCase()) {
    console.log("My name is: ", Fname, Lname);
}

sayName2("Archit Kumar");
// sayName2(null);
// sayName2(undefined);

function solve(value = { age: 15, wt: 65, ht: 174 }) {
    console.log("Hello", value);
}

solve(17);
solve();

function getAge() {
    return 26;
}

function getName(name = "Archit", age = getAge()) {
    console.log(name, age);
}

getName();