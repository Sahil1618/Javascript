class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
    }

    get password() {
        return `${this._password}Sahil`
    }

    set password(value) {
        this._password = value.toUpperCase()
    }
}

const sahil = new User("Sahil@sahil.ai", "123")

console.log(sahil.password);
console.log(sahil.email);
