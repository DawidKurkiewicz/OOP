const myOwnNew = (constructorFn, argsArray) => {
    const newInstance = Object.create(constructorFn.prototype)

    constructorFn.apply(newInstance, argsArray)
    return newInstance
}



function Dog(name) {
    this.sound = 'woof'
    this.name = name
}

Dog.prototype.makeSound = function () {
    console.log(this.sound)
}

Dog.prototype.sound = 'buuum'

const dog1 = myOwnNew (Dog, ['Puszek'])
dog1.makeSound()