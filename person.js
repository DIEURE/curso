class Person{
    constructor(name){
        this.name = name
    }

    sayMyname(){
        return `Meu nome ${this.name}!`
    }
}

module.exports = {
    Person,
}