function ToDo() {
    this.tasks = []
}
ToDo.prototype.addTasks = function () {
    this.tasks.push(new Task(text))
}
function Task(text) {
    this.text = text
}
const toDo1 = new ToDo()
toDo1.addTasks('wynies smieci')
console.log(toDo1)