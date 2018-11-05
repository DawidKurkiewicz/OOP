class Calculator {
    inputFirst(first) {
        this.first = first
    }
    inputSecond(second) {
        this.second = second
    }
    add() {
        console.log(this.first + this.second)
    }
    subtract() {
        console.log(this.first - this.second)
    }
    multiply() {
        console.log(this.first * this.second)
    }
    divide() {
        if (this.second === 0) {
            console.log('nie dziel przez zero cholero')
        } else {
            console.log(this.first / this.second)
        }
    }
    pow() {
        let x = 1
        for (let i = 1; i <= this.second; i++) {
            x = this.first * x;
        }
        console.log(x)
    }
}





const calc = new Calculator()
calc.inputFirst(5)
calc.inputSecond(2)

calc.add()
calc.subtract()
calc.multiply()
calc.divide()
calc.pow()