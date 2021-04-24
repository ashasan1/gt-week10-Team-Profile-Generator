const Worker = require("./worker");

class Manager extends Worker {
    constructor(name, id, email, office) {
        // super(name, id, email);
        super(name, id, email); 
        this.office = office;
        this.title = "Manager";
    }
    getRole(){
        return this.title;
    }
    
    getOffice() {
        return this.office;
    }

}

module.exports = Manager;