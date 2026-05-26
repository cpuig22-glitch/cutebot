input.onButtonPressed(Button.A, function () {
    if (input.soundLevel() > 125) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . # # . .
            . # # . .
            . # . . .
            `)
        cuteBot.motors(0, 0)
        basic.pause(2000)
    } else {
        cuteBot.motors(50, 50)
    }
})
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    # # # # #
    `)
