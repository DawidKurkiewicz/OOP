function ClickableButton(label, handler) {
    this.label = label
    this.handler = handler
    this.button = null
    this.init()
}

ClickableButton.prototype.init = function () {
    this.render()
}


ClickableButton.prototype.render = function () {
    this.button = document.createElement('button')
    this.button.style.top = '100px'
    this.button.style.right = '100px'
    this.button.style.backgroundColor = 'yellow'
    this.button.style.height = '100px'
    this.button.style.width = '100px'
    this.button.addEventListener('click', this.handler)

    document.body.appendChild(this.button)

}




