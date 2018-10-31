const UserModel = require("./index");
const assert = require("chai").assert;

describe("Main function testing", () => {
    let User;
    beforeEach(() => {
        User = new UserModel("Adithya Visnu", "Teman Berbagi", "Admin");
    })
    afterEach(() => {
        User = null;
    })
    it("Should return User instance", () => {
        assert.isNotNull(User)
        assert.isString(User.token);
    })

})