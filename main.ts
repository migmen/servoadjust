function servoAdjust () {
    servoNum = 0
    adjNum = 0
    while (loop) {
        if (input.buttonIsPressed(Button.AB)) {
            adjNum = runservo
            basic.showNumber(adjNum)
        } else if (input.buttonIsPressed(Button.A)) {
            servoNum += 1
            runservo = servoNum
            basic.showNumber(runservo)
        } else if (input.buttonIsPressed(Button.B)) {
            servoNum += -1
            runservo = servoNum
            basic.showNumber(runservo)
        } else if (servoNum > 4) {
            basic.showIcon(IconNames.Sad)
            basic.showNumber(servoNum)
        }
        if (adjNum == 1) {
            basic.showNumber(servoNum)
            UDriver_PCA9685.move_servo(UDriver_PCA9685.Pin.P1, 89)
            basic.pause(100)
            UDriver_PCA9685.move_servo(UDriver_PCA9685.Pin.P1, 4)
            basic.showLeds(`
                # # . # #
                # # # # #
                # # # # #
                . . # # #
                . . # # #
                `)
            basic.pause(50)
        } else if (adjNum == 2) {
            basic.showNumber(servoNum)
            UDriver_PCA9685.move_servo(UDriver_PCA9685.Pin.P2, 57)
            basic.pause(100)
            UDriver_PCA9685.move_servo(UDriver_PCA9685.Pin.P2, 57)
            basic.showLeds(`
                # # . # #
                # # # # #
                # # # # #
                # # # . .
                # # # . .
                `)
        } else if (adjNum == 3) {
            basic.showNumber(servoNum)
            UDriver_PCA9685.move_servo(UDriver_PCA9685.Pin.P3, 138)
            basic.pause(100)
            UDriver_PCA9685.move_servo(UDriver_PCA9685.Pin.P3, 4)
            basic.showLeds(`
                # # # # .
                # # # # .
                . . # # .
                . . # # .
                . . # # .
                `)
        } else if (adjNum == 4) {
            basic.showNumber(servoNum)
            UDriver_PCA9685.move_servo(UDriver_PCA9685.Pin.P3, 138)
            basic.pause(100)
            UDriver_PCA9685.move_servo(UDriver_PCA9685.Pin.P3, 4)
            basic.showLeds(`
                . # # # #
                . # # # .
                . # # . .
                . # # . .
                . # # . .
                `)
        }
    }
}
let runservo = 0
let adjNum = 0
let servoNum = 0
let loop = false
basic.showIcon(IconNames.Happy)
loop = true
basic.forever(function () {
    servoAdjust()
})
