const { DogAdapter, LionAdapter } = require('./AnimalAdapter');

const SoundMakerApp = function(adapter){
    const currentAdapter = adapter()
    return { makeSound: currentAdapter.makeSound }
}

const lionSound = SoundMakerApp(LionAdapter).makeSound

const dogSound = SoundMakerApp(DogAdapter).makeSound

module.exports = { lionSound, dogSound }
