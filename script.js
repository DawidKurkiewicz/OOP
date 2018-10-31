const makeSound = function (name, lastname) {
console.log(this.sound + ' ' + name + ' ' + lastname)
}

const cat = {
    name: 'filemon',
    sound: 'miau',
    makeSound: makeSound
}



makeSound.apply(cat, ['dawid', 'kurka'])

makeSound.call(cat, 'dawid', 'kurka')


makeSound.apply({ sound: 'wow'}, ['dawid', 'kurka'])

makeSound.call({ sound: 'wow'}, 'dawid', 'kurka')

makeSound('dawid', 'kurk')

cat.makeSound('dawid', 'kurka', 'bom')




