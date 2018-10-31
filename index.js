function User(email, departement="", employment="user") {
    this.email = email;
    this.departement = departement;
    this.employment = employment;
    this.token = "generatedJWToken";
    this.refresh = "generatedRefreshToken";
}

User.prototype.get = function get() {
    return this;
}

module.exports = User