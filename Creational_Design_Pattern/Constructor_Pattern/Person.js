const Person = function(name, age, occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation

    this.aboutMe = function() {
        console.log(`Hi my name is ${this.name}, I am ${this.age} years old and I am a ${this.occupation}`)
    }
}

module.exports = Person;
