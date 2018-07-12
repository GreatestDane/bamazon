// Create a constructor for character creation

function Character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function () {
        console.log("The character " + name + ", is a " + age + " year old " + gender + " " + profession + " with " + strength + " strength, and " + hp + " hit points.");
    };
    this.isAlive = function () {
        if (this.hp > 0) {
            console.log(this.name + " is alive!");
            return true;
        }
        else {
            console.log(this.name + " is dead!");
            return false;
        }
    };
    this.attack = function (otherPlayer) {
        console.log(this.name + " attacks " + otherPlayer.name + ", who had " + otherPlayer.hp + " hit points before the attack.");
        otherPlayer.hp -= this.strength;
        console.log(otherPlayer.name + " now has " + otherPlayer.hp + " hit points.");
    };
    this.levelUp = function () {
        this.age += 1;
        this.strength += 5;
        this.hp += 25;
        console.log(this.name + " leveled up! Your age is now " + this.age + " your strength is now " + this.strength + " your hp is now " + this.hp);
    }
};

// Create a new character
var daneGRuss = new Character("Dane G Russ", "server", "male", 32, 13, 666);

// Display the new characters stats
daneGRuss.printStats();

// Create a new character
var golnar = new Character("Golnar", "bartender", "female", 28, 10, 777);

// Display new character stats
golnar.printStats();

// run methods

daneGRuss.attack(golnar);
golnar.attack(daneGRuss);

daneGRuss.isAlive();
golnar.isAlive();

daneGRuss.levelUp();
golnar.levelUp();

while (daneGRuss.isAlive() && golnar.isAlive()) {
    daneGRuss.attack(golnar);
    golnar.attack(daneGRuss);

    daneGRuss.isAlive();
    golnar.isAlive();

    if (daneGRuss.isAlive() === false || golnar.isAlive() === false) {
        break
    }
}