class Animal {
    constructor(name){
        this.name=name
    }
}
class Cat extends Animal{
    constructor(name){
        super(name)
        this.sound = 'miau'
    }
    makeSound() {
        console.log(this.sound)
    }
    changeSound(sound) {
        this.sound = sound
    }
}

const cat = new Cat('poooo')

cat.makeSound()

cat.changeSound('klaczek')

cat.makeSound()

console.log(cat)