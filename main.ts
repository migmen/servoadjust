// How to use
// 
// 1.Push A to start correction
// 
// 2.Push A or B to move each servo
// 
// 3.Push A+B to switch to next servo
// 
// 4.Loop
// 
// 5.Ends when smile is displayed
// 
// 6.Reset, then Push B to walk
// 
// If PLEN does not fall over, setting is complete
function servoAdjust () {
    adjNum = 0
    servoNum = 0
    basic.showNumber(servoNum)
    while (loop) {
        if (input.buttonIsPressed(Button.AB)) {
            basic.showNumber(servoNum)
        } else if (input.buttonIsPressed(Button.A)) {
            adjNum += 1
            servoNum = adjNum
        } else if (input.buttonIsPressed(Button.B)) {
            adjNum += -1
            servoNum = adjNum
        } else if (adjNum > 7) {
            basic.showIcon(IconNames.Happy)
            basic.pause(2000)
        }
        if (servoNum == 1) {
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 89)
            basic.pause(200)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 4)
            basic.pause(200)
        } else if (servoNum == 2) {
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 57)
            basic.pause(200)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 0)
            basic.pause(200)
        } else if (servoNum == 3) {
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 138)
            basic.pause(200)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 0)
            basic.pause(200)
        } else if (servoNum == 4) {
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 61)
            basic.pause(200)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 128)
            basic.pause(200)
        } else {
            basic.showLeds(`
                . . # . .
                # . # . #
                # . # . #
                . # # # .
                . . . . .
                `)
        }
    }
}
let servoNum = 0
let adjNum = 0
let loop = false
basic.showIcon(IconNames.Happy)
loop = true
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        servoAdjust()
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
    }
})
