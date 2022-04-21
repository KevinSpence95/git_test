class Animal {
    #alive;
    constructor(birthName, initialWeight){
        this.name = birthName;
        this.weight = initialWeight;
        this.#alive = true;
    }
    drink(){
        console.log('slurp');
    }

    eat(animal){
        if(animal instanceof Animal){
            if(animal.weight < this.weight) {
                this.weight = this.weight + animal.weight;
                animal.die();
            }
            else {
                console.log(`${this.name} is too small to eat ${animal.name}.`);
            }
        }
        else {
            throw console.error(`${this.name} can only eat other animals.`);
        }
    }

    die() {
        this.#alive = false;
    }

    get currentWeight(){
        return this.weight;
    }

    get isAlive(){
        return this.#alive;
    }

    revive() {
        this.#alive = true;
        return `${this.name} has been brought back from the dead.`
    }

}

//TEST
/*
let mouse = new Animal("Jerry",1);
let cat = new Animal("Tom",10)

cat.eat(mouse); //weight combine, kill mouse
console.log(cat.currentWeight); //11
console.log(cat.name); //Tom
console.log(mouse.isAlive); //false
console.log(mouse.revive()); //Jerry has been brought back from the dead
console.log(mouse.isAlive); //true
*/