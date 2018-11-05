// function ToDo() {
//     this.task = []
//     this.render()
// }
class ToDo {
    constructor() {
        this.task = []
        this.render()
    }
    addTask(text) {
        this.task.push(new Task(text))
        this.render()
    }
    render() {
        document.body.innerHTML = ''
        this.makeUI()
        const list = document.createElement('ul')
        this.task.forEach(task => {
            const taskDiv = document.createElement('li')
            taskDiv.innerText = task.text
            list.appendChild(taskDiv)
        })
        document.body.appendChild(list)
    }
    makeUI() {
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.innerText = 'dodaj task'
        button.addEventListener(
            'click',
            () => this.addTask(input.value)
            //(function() { this.addTask(input.value) }).bind(this)

        )
        document.body.appendChild(input)
        document.body.appendChild(button)

    }




}
// ToDo.prototype.addTask = function (text) {
//     this.task.push(new Task(text))
//     this.render()
// }
// ToDo.prototype.render = function () {
//     document.body.innerHTML = ''
//     this.makeUI()
//     const list = document.createElement('ul')
//     this.task.forEach(task => {
//         const taskDiv = document.createElement('li')
//         taskDiv.innerText = task.text
//         list.appendChild(taskDiv)
//     })
//     document.body.appendChild(list)
// }
// ToDo.prototype.makeUI = function () {
//     const input = document.createElement('input')
//     const button = document.createElement('button')
//     button.innerText = 'dodaj task'
//     button.addEventListener(
//         'click',
//         () => this.addTask(input.value)
//         //(function() { this.addTask(input.value) }).bind(this)

//     )
//     document.body.appendChild(input)
//     document.body.appendChild(button)

// }

// function Task(text) {
//     this.text = text
// }
class Task {
    constructor(text) {
        this.text = text
    }
}

const toDo1 = new ToDo()


