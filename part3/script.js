class Cat {
    constructor(name) {
        this.name = name
    }
    makeSound() {
        console.log('Meoooooooow')
    }
}


const cat1 = new Cat('Burek')
console.log(cat1)


cat1.makeSound()


// function Cat(name) {
//     this.name = name
// }

// const cat1 = new Cat('Burek')

// Cat.prototype.makeSound = function() {
//     console.log('Meoooooooow')
// }

// cat1.makeSound()
//console.log(cat1)
