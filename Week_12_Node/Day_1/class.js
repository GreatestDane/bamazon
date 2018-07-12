var Student = require("./student.js");

var ClassRoom = function(professor, classNumber) {
    this.students = [];
    this.professor = professor;
    this.classNumber = classNumber;
}

ClassRoom.prototype.addStudent = function(name, subject, gpa) {
    this.students.push(new Student(name, subject, gpa));
};

var firstClass = new ClassRoom("Sammy", 405);

firstClass.addStudent("Dane", "coding", 2.0);

console.log(firstClass);



