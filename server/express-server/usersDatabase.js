class UsersDatabase{
    usersArray = [];
    
    constructor() {
        this.usersArray = [];
    }

    validateLoginUser(name, password) {
        let status = "invalid";

        this.usersArray.forEach(user => {
            if( (user.name === name) && (user.password !== password) ) {
                status = 'wrongPassword';
                return status;
            } else if( (user.name === name) && (user.password === password) ) {
                status = 'valid';
                return status;
            }
        })
        return status;
    }
}


module.exports = ({ UsersDatabase });