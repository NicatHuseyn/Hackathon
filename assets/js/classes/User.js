let myuuid = crypto.randomUUID();


// const bcrypt = require('bcrypt');

export class User {
    constructor(fullname, username, email, gender, password) {
        this.id = myuuid,
        this.fullname = fullname,
        this.username = username,
        this.email = email,
        this.gender = gender,
        this.password = password
    }

    // hashPassword(password) {
    //     const saltRounds = 10;
    //     return bcrypt.hashSync(password, saltRounds);
    // }

    // validatePassword(inputPassword) {
    //     return bcrypt.compareSync(inputPassword, this.password);
    // }
}

export class LoginUser {
    constructor(username, email = null,password) {
        this.username = username,
        this.password = password,
        this.email = email
    }

    // validatePassword(inputPassword) {
    //     return bcrypt.compareSync(inputPassword, this.password);
    // }
}


