const Employee = require("./employee");

class Intern extends Employee {

    constructor(name,id,email,school) {
        super(name,id,email,school)
        this.school = school;

        super.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;