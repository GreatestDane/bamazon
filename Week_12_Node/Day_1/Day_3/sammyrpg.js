var p1Choice = process.argv[2];
var p2Choice = process.argv[3];

// constructor function which can take in a series of values and create objects
// with the properties contained inside
/**
 * @typedef Character
 * @param {string} name 
 * @param {string} profession 
 * @param {string} gender 
 * @param {number} age 
 * @param {*} strength 
 * @param {*} hitpoints 
 */
function Character(name, profession, gender, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;

  // method which prints all of the stats for a character
  this.printStats = function() {
    console.log("Name: " + this.name + "\nProfession: " + this.profession +
    "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " +
    this.strength + "\nHitPoints: " + this.hitpoints);
    console.log("\n-------------\n");
  };

  // method which determines whether or not a character's "hitpoints" are less than zero
  // and returns true or false depending upon the outcome
  this.isAlive = function() {
    if (this.hitpoints > 0) {
      console.log(this.name + " is still alive!");
      console.log("\n-------------\n");
      return true;
    }
    console.log(this.name + " has died!");
    return false;
  };

  // method which takes in a second object and decreases their "hitpoints" by this character's strength
  /**
   * 
   * @param {Character} character2 
   */
  this.attack = function(character2) {
    character2.hitpoints -= this.strength;
  };

  // method which increases this character's stats when called
  this.levelUp = function() {
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
  };
}

// creates two unique characters using the "character" constructor
var chars = {
  crusher: new Character("Crusher", "Warrior", "Male", 25, 10, 75),
  aragorn: new Character("Aragorn", "King of Gondor", "male", 9999, 9999, 9999), 
  dodger: new Character("Dodger", "Rogue", "Female", 23, 20, 50)
}

var p1 = chars[p1Choice];
var p2 = chars[p2Choice];

// while loop that continues to run so long as both characters' "hitpoints" are above zero
while (p1.isAlive() && p2.isAlive()) {
  // characters deal damage to one another
  p1.attack(p2);
  p2.attack(p1);
  // prints stats to show changes
  p1.printStats();
  p2.printStats();

  console.log("======== turn complete =======")
}
