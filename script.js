const makeSound = function () {
console.log(this.sound)
}

const cat = {
    name: 'filemon',
    sound: 'miau',
    makeSound: makeSound
}
cat.makeSound()