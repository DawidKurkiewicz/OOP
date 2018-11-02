function ClickableButton(label, handler) {
this.label = label
this.handler = handler

this.render ()
}




ClickableButton.prototype.render = function () {
    const button = document.createElement('button')
    button.innerText = this.label
    button.addEventListener('click', this.handler)
    document.body.appendChild(button)

}




