function Programmer(name, position, age, language){
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;

    this.outPut = function() {
        console.log(`
        Name: ${this.name}
        Job: ${this.job}
        Age: ${this.age}
        Language: ${this.language}
        `)
    }
};

var myP = new Programmer("Sammy", "Teacher", "25", "javaScript");

myP.outPut();
console.log("test");