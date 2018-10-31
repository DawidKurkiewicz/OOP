function Dog() {
    this.sound = 'woof'
    this.makeSound = function () {
        console.log(this.sound)
    }
}

Dog.prototype.makeSound = function () {
    console.log(this.sound)
}

const dog0 = Dog()
const dog1 = new Dog() 
const dog2 = new Dog()

dog2.makeSound()