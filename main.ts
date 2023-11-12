input.onButtonPressed(Button.A, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showNumber(0)
    basic.showLeds(`
        # . # . #
        . . . . .
        # . # . #
        . . . . .
        # . # . #
        `)
    basic.pause(1000)
    basic.showNumber(1)
    basic.showIcon(IconNames.Asleep)
    basic.pause(1000)
    basic.showNumber(2)
    basic.showIcon(IconNames.EighthNote)
    basic.pause(1000)
})
