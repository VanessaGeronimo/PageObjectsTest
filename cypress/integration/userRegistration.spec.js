import UserRegistration from '../elements/pages/userRegistration/userRegistration'

describe('cadastra usuário', function () {
    beforeEach(function () {
        cy.fixture('users').then(function (users) {
            this.users = users;
        })
    })

    it('should add a user correctly', function () {
        const userRegistration = new UserRegistration()
        userRegistration.visit()
        userRegistration
            .addUser(this.users.ok)
            .checkNoErrors()
            .checkInsertedUser(this.users.ok, 1)
    })

    it('should throw an name error', function () {
        const userRegistration = new UserRegistration()
        userRegistration.visit()
        userRegistration
            .addUser(this.users.nameError)
            .checkNameError()
    })

    it('should throw an email error', function () {
        const userRegistration = new UserRegistration()
        userRegistration.visit()
        userRegistration
            .addUser(this.users.emailError)
            .checkEmailError()
    })

    it('should throw an password error', function () {
        const userRegistration = new UserRegistration()
        userRegistration.visit()
        userRegistration
            .addUser(this.users.passError)
            .checkPassError()
    })

    it('should add two users correctly', function () {
        const userRegistration = new UserRegistration()
        userRegistration.visit()
        userRegistration
            .addUser(this.users.ok)
            .addUser(this.users.ok2)
            .checkInsertedManyUsers([this.users.ok, this.users.ok2])
    })

    it('should delete user of id 1 correctly', function () {
        const userRegistration = new UserRegistration()
        userRegistration.visit()
        userRegistration
            .addUser(this.users.ok)
            .addUser(this.users.ok2)
            .removeUser(1)
            .checkInsertedUser(this.users.ok2, 2)
            .checkDeletedUser(1)
    })

    it('should delete user of id 2 correctly', function () {
        const userRegistration = new UserRegistration()
        userRegistration.visit()
        userRegistration
            .addUser(this.users.ok)
            .addUser(this.users.ok2)
            .removeUser(2)
            .checkInsertedUser(this.users.ok, 1)
            .checkDeletedUser(2)
    })

})
