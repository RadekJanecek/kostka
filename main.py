def zámek():
    global ThrowEnabled
    basic.show_icon(IconNames.YES)
    ThrowEnabled = True
def stěny():
    global kostka
if input.logo_is_pressed():
    if kostka == 10:
        kostka = 6
    else:
        kostka = 10
    basic.show_number(kostka)
def házení():
    global ThrowEnabled
    if ThrowEnabled == True and input.is_gesture(Gesture.SHAKE):
        ThrowEnabled = False        
        hod = randint(1, kostka)
        if hod == 1:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            """)
        if hod == 2:
            basic.show_leds("""
                # . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . #
            """)
        if hod == 3:
            basic.show_leds("""
                # . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . #
            """)
        if hod == 4:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                . . . . .
                                . . . . .
                                # . . . #
            """)
        if hod == 5:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                . . # . .
                                . . . . .
                                # . . . #
            """)
        if hod == 6:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
            """)
        if hod == 7:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                # . # . #
                                . . . . .
                                # . . . #
            """)
        if hod == 8:
            basic.show_leds("""
                # . . . #
                                . . # . .
                                . # . # .
                                . . # . .
                                # . . . #
            """)
        if hod == 9:
            basic.show_leds("""
                # . . . #
                                . . # . .
                                . # # # .
                                . . # . .
                                # . . . #
            """)
        if hod == 10:
            basic.show_leds("""
                # . . . #
                                . # . # .
                                # . . . #
                                . # . # .
                                # . . . #
            """)
        for index in range(hod):
            music.play_tone(262, music.beat(4))
            music.rest(music.beat(2))
ThrowEnabled = False
kostka = 0
kostka = 6

input.on_button_pressed(Button.A, zámek)
input.on_logo_event(TouchButtonEvent.PRESSED, stěny)
input.on_gesture(Gesture.SHAKE, házení)


def on_forever():
    pass
basic.forever(on_forever)
