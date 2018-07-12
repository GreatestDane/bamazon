var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    //coin toss functions
    this.badGame = function() {
        var randomNumber = Math.floor((Math.random() * 2) + 1)
        if (randomNumber === 1) {
            this.offense -= 1;
        }
        else {
            this.defense -= 1;
        }
    };

    this.goodGame = function() {
        var randomNumber = Math.floor((Math.random() * 2) + 1)
        if (randomNumber === 1) {
            this.offense += 1;
        }
        else {
            this.defense += 1;
        }
    };

    this.printStats = function() {
        console.log (`
        Name: ${this.name}
        Position: ${this.position}
        Offense: ${this.offense}
        Defense: ${this.defense}
        `)
    };
};

var count = 0;

var askQuestion = function() {
    if (count < 3) {
        inquirer.prompt([
            {
                name: "name",
                question: "What is players name?"
            },
            {
                name: "position",
                question: "What is players position?"
            },
            {
                name: "offense",
                question: "What is players offense stats?"
            },
            {
                name: "defense",
                question: "What is players defense stats?"
            }
        ]).then(function(answers){
            var newPlayer = new Player(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense
            )

            newPlayer.printStats();

            count ++;

            askQuestion();
        });

        }
        else {
            console.log("All questions asked");
        }
    }

    askQuestion();
