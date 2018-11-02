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






function SideBarMenu() {
    this.isOpen = true
    this.isOnTheLeft = true
    this.isOneTheRight = false
    this.bgColor = 'red'
}

SideBarMenu.prototype.render = function () {
    const menuDiv = document.createElement('div')

    //Add styles here


    menuDiv.style.backgroundColor = this.bgColor
    menuDiv.style.width = '30%';
    menuDiv.style.height = '100vh';
    menuDiv.style.position = 'fixed';
    menuDiv.style.top = '0';

    document.body.appendChild(menuDiv)
}

const menu1 = new SideBarMenu();
menu1.render()