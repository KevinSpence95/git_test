import Animal from "./animalClass.mjs";

class Dog extends Animal {
    #alive;
    constructor(birthName,initialWeight,gender) {
        super(birthName,initialWeight,gender);
    }
    breed(mate) {
        if(mate instanceof Dog && mate.gender !== this.gender) {
            return new Dog(`${this.name.slice(0,3)}${mate.name.slice(2,)}`,1,Math.random()>.50?"Male":"Female")
        }
    }
}

let dog1 = new Dog("Gus", 100, "Male");
console.log(dog1.name);
console.log(dog1.weight);
console.log(dog1.sex);
console.log(dog1.isAlive);
dog1.drink()

let dog2 = new Dog("Sarah",85,"Female");
let babyDog = dog1.breed(dog2);
console.log(babyDog.sex);
console.log(Object.entries(babyDog))
Object.entries(babyDog).forEach((item)=>{
    console.log(item[0]);
})
