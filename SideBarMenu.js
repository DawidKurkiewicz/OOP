function SideBarMenu(color, direction) {   // funkcja fabryka
    this.isOpen = true
    this.isOnTheLeft = direction === 'left' ? true : false
    this.isOnTheRight = direction === 'right' ? true : false
    this.bgColor = color || 'red'
    this.menuDiv = null

    if (!this.isOnTheLeft && !this.isOnTheRight) { //jesli bez argumentu to jest po lewej 
        this.isOnTheLeft = true
    }
    this.init()
}
SideBarMenu.prototype.init = function () {
    new ClickableButton (
        'Toggle Menu',
        this.toggleMenu.bind(this)
    )
    this.render()
}
SideBarMenu.prototype.render = function () {  //funkcja render
    if (this.menuDiv) this.menuDiv.remove()

    this.menuDiv = document.createElement('div') // tworzymy element

    //to są style 

    this.menuDiv.style.backgroundColor = this.bgColor
    this.menuDiv.style.width = '200px';
    this.menuDiv.style.height = '100vh';
    this.menuDiv.style.position = 'fixed';
    this.menuDiv.style.top = '0';

    if (this.isOnTheLeft) this.menuDiv.style.left = '0'
    if (this.isOnTheRight) this.menuDiv.style.right = '0'
    if (!this.isOpen) this.menuDiv.style.display = 'none' // ! bo jest zaprzeczenie

    document.body.appendChild(this.menuDiv) // wrzucamy element do body
}

SideBarMenu.prototype.toggleMenu = function () {
    if (this.isOpen === true) {
        this.isOpen = false
    } else {
        this.isOpen = true
    }
    this.render()
}


