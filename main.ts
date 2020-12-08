for (let index = 0; index < 6; index++) {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(800)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(800)
}
basic.forever(function () {
	
})
