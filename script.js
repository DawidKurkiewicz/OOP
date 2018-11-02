// function Dog(name) {
//     this.sound = 'woof'
//     this.name = name
// }

// Dog.prototype.makeSound = function () {
//     console.log(this.sound)
// }

// Dog.prototype.sound = 'buuum'

// const dog0 = Dog()
// const dog1 = new Dog('klebuszek') 
// const dog2 = new Dog('puszek')

// dog1.makeSound()

// const myOwnNew = (constructorFn, argsArray) => {
//     const newInstance = Object.create(constructorFn.prototype)
//     constructorFn.apply(newInstance, argsArray)
//     return newInstance
// }
// function Dog(name) {
//     this.sound = 'woof'
//     this.name = name
// }
// Dog.prototype.makeSound = function () {
//     console.log(this.sound)
// }
// Dog.prototype.sound = 'buuum'
// const dog1 = myOwnNew (Dog, ['Puszek'])
// dog1.makeSound()




// function Person(name) {
//     this.name = name;
// }
// Person.prototype.sayHello = function () {
//     console.log(`Hi, I'm ${this.name}`)
// }
// const me = new Person('dawid');
// me.sayHello();


function SideBarMenu () {
    this.isOpen = true
    this.isOnTheLeft = true
    this.isOneTheRight = false
    this.bgColor = 'red'

}


const menu1 = new SideBarMenu();