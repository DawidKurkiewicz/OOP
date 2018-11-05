
class Cat {
    constructor(){
        this.sound = 'miau'
    }
    makeSound() {
        console.log(this.sound)
    }
    changeSound(sound) {
        this.sound = sound
    }
}

const cat = new Cat()

cat.makeSound()

cat.changeSound('klaczek')

cat.makeSound()

