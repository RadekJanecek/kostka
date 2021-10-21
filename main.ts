let kostka: number;
if (input.logoIsPressed()) {
    if (kostka == 10) {
        kostka = 6
    } else {
        kostka = 10
    }
    
    basic.showNumber(kostka)
}

let ThrowEnabled = false
kostka = 0
kostka = 6
input.onButtonPressed(Button.A, function zámek() {
    
    basic.showIcon(IconNames.Yes)
    ThrowEnabled = true
})
input.onLogoEvent(TouchButtonEvent.Pressed, function stěny() {
    
})
input.onGesture(Gesture.Shake, function házení() {
    let hod: number;
    
    if (ThrowEnabled == true && input.isGesture(Gesture.Shake)) {
        ThrowEnabled = false
        hod = randint(1, kostka)
        if (hod == 1) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            `)
        }
        
        if (hod == 2) {
            basic.showLeds(`
                # . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . #
            `)
        }
        
        if (hod == 3) {
            basic.showLeds(`
                # . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . #
            `)
        }
        
        if (hod == 4) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                . . . . .
                                . . . . .
                                # . . . #
            `)
        }
        
        if (hod == 5) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                . . # . .
                                . . . . .
                                # . . . #
            `)
        }
        
        if (hod == 6) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
            `)
        }
        
        if (hod == 7) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                # . # . #
                                . . . . .
                                # . . . #
            `)
        }
        
        if (hod == 8) {
            basic.showLeds(`
                # . . . #
                                . . # . .
                                . # . # .
                                . . # . .
                                # . . . #
            `)
        }
        
        if (hod == 9) {
            basic.showLeds(`
                # . . . #
                                . . # . .
                                . # # # .
                                . . # . .
                                # . . . #
            `)
        }
        
        if (hod == 10) {
            basic.showLeds(`
                # . . . #
                                . # . # .
                                # . . . #
                                . # . # .
                                # . . . #
            `)
        }
        
        for (let index = 0; index < hod; index++) {
            music.playTone(262, music.beat(4))
            music.rest(music.beat(2))
        }
    }
    
})
basic.forever(function on_forever() {
    
})
