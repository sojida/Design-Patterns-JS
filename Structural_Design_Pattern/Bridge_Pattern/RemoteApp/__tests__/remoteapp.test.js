const { radioRemote, smartRemote, tvRemote, SonyTv, SharpRadio } = require('../App');

test('Remote App', () => {
    expect(SonyTv.power).toEqual(false)
    expect(SharpRadio.power).toEqual(false)

    expect(radioRemote.togglePower()).toEqual(true)
    expect(SharpRadio.power).toEqual(true)

    expect(tvRemote.togglePower()).toEqual(true)
    expect(SonyTv.power).toEqual(true)

    expect(tvRemote.volumeDown()).toEqual(false)
    expect(SonyTv.volume).toEqual(0)

    expect(tvRemote.volumeUp()).toEqual(5)
    expect(SonyTv.volume).toEqual(5)

    expect(tvRemote.volumeUp()).toEqual(10)
    expect(SonyTv.volume).toEqual(10)

    expect(tvRemote.volumeDown()).toEqual(5)
    expect(SonyTv.volume).toEqual(5)

    expect(smartRemote.togglePower()).toEqual(false)    
    expect(SonyTv.power).toEqual(false)

    expect(smartRemote.vibrate()).toEqual('Vibes')
    
    while(SonyTv.volume <= 95){
        tvRemote.volumeUp()
    }

    expect(tvRemote.volumeUp()).toEqual(false)
    expect(SonyTv.volume).toEqual(100)
})
