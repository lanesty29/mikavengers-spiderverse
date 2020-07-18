input.onButtonPressed(Button.A, function () {
    Assemble = LineClear
    basic.showLeds(`
        . . . . .
        . # # . #
        . . . # .
        # # # . .
        . . . # #
        `)
})
input.onButtonPressed(Button.B, function () {
    Assemble = Bahaya
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
let Bahaya = 0
let LineClear = 0
let Assemble = 0
radio.setGroup(1)
Assemble = 0
LineClear = 1
Bahaya = 2
basic.forever(function () {
    radio.sendNumber(Assemble)
})
