function User(email, departement="", employment="user") {
    this.email = email;
    this.departement = departement;
    this.employment = employment;
    this.token = "jwtTokenProvided";
}

User.prototype.get = function get() {
    return this;
}

User.prototype.verify = function verifyUser(token, departement, employment) {
    return true;
}

module.exports = User