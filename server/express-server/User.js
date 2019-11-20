class User {

    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    getName() {
        return this.name;
    }
}

module.exports = { User };
