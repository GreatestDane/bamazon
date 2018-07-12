var Student = function(name, subject, gpa) {
    this.name = name;
    this.subject = subject;
    this.gpa = gpa;
};

Student.prototype.printStats = function() {
    console.log(`
        Name: ${this.name}
        Subject: ${this.subject}
        GPA: ${this.subject}
    `)
};

var gary = new Student("gary", "Maths", "2.0");

gary.printStats();

module.exports = Student;