const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, office); 
        this.office = office;
        super.role = "Manager";
    }
    
    
    getOffice() {
        return this.office;
    }

}

module.exports = Manager;