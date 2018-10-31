function Dog(name) {
    this.sound = 'woof'
    this.name = name
}

Dog.prototype.makeSound = function () {
    console.log(this.sound)
}

Dog.prototype.sound = 'buuum'

const dog0 = Dog()
const dog1 = new Dog('klebuszek') 
const dog2 = new Dog('puszek')

dog1.makeSound()