basic.forever(function () {
    basic.showIcon(IconNames.Giraffe)
    basic.pause(100)
    basic.showIcon(IconNames.Diamond)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # . # .
        # # # # #
        `)
    basic.pause(100)
})
