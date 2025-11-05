basic.showIcon(IconNames.No)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
    	
    } else {
        basic.showIcon(IconNames.No)
        basic.showIcon(IconNames.Yes)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        servos.P0.setAngle(0)
        basic.pause(500)
        servos.P0.setAngle(0)
        basic.pause(5000)
    }
})
