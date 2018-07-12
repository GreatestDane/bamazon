function digitalPal(hungry, sleepy, bored, age){
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
    this.feed = function() {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        }
        if (!this.hungry) {
            console.log("No thanks, I'm full.");
        };
    };
    this.sleep = function() {
        if (this.sleepy) {
            console.log("ZzzzzzZZZZZzzzzzZZZZzzz");
            this.sleepy = false;
            this.bored = true;
            this.increasedAge();
        }
        if (!this.sleepy) {
            console.log("No way! I'm not sleepy!")
        };
    };
    this.play = function() {
        if (this.bored) {
            console.log("YAY let's play!");
            this.bored = false;
            this.hungry = true;
        }
        if (!this.bored) {
            console.log("Not right now, later?");
        };
    };
    this.increasedAge = function() {
        this.age += 1;
        console.log("Happy birthday to me! I am " + this.age + " years old!");
    };
};

// Create a dog pet
var dog = new digitalPal(false, false, true, 0) 

// add attributes to dog pet
dog.outside = false;
dog.bark = function() {
    console.log("bark bark");
};
dog.goOutside = function() {
    if (!this.outside) {
        console.log("YAY! I love the outdoors!");
    }
    if (this.outside) {
        console.log("we're already outside, tho");
    };
};
dog.goInside = function() {
    if (this.outside) {
        console.log("Do we have to? Fine...")
    }
    if (!this.outside) {
        console.log("But we're already inside...");
    }
};

// Create a cat pet
var cat = new digitalPal(false, false, true, 0);

// Add attributes to cat pet
cat.houseCondition = 100;
cat.meow = function() {
    console.log("meow meow");
};
cat.destroyFurniture = function() {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;
        this.bored = false;
        this.sleepy = true;
    };
};
cat.buyNewFurniture = function() {
    this.houseCondition += 50;
    console.log("Are you sure? House condition is " + this.houseCondition);
};

dog.sleep();
dog.play();
dog.feed();

dog.play();
dog.sleep();
dog.feed();
dog.bark();
dog.goOutside();
dog.goInside();

cat.meow();
cat.destroyFurniture();
cat.buyNewFurniture();
