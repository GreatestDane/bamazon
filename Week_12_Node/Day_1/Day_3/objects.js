
var dogs = {
    raining: true,
    noise: "woof",
    makeNoise: function() {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
};

var cats = {
    raining: false,
    noise: "meow",
    makeNoise: function() {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
};

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
    if ( dogs.raining && cats.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!!!");
    }
};

massHysteria(dogs, cats);


// Create a constructor 

function Person(firstName, lastName, job) {
    this.name = firstName + " " + lastName;
    this.job = job;
    this.display = function() {
        console.log(this.name + " is a " + this.job);
    }
};

var p = new Person("sammy", "Roberts", "Aspiring Gymnist");

p.display();
