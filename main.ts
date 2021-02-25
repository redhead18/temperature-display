input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        # . # . .
        . . # . .
        . . # . .
        . . . # #
        `)
    basic.showLeds(`
        . . # # #
        . # . . .
        . # . . .
        . # . . .
        . . # # #
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
    basic.clearScreen()
})
