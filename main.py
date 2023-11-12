def on_forever():
    basic.show_icon(IconNames.SAD)
    basic.pause(1000)
    basic.show_icon(IconNames.HAPPY)
    basic.pause(1000)
basic.forever(on_forever)
