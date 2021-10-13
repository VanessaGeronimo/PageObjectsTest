import RegistrationForm from './registrationForm'
import UserTable from './userTable'

class UserRegistration{
    constructor() {
        this.RegistrationForm = new RegistrationForm()
        this.UserTable = new UserTable()
    }

    visit(){
        cy.visit('/teste/qa')
    }

    addUser(user){
        this.user = user
        this.RegistrationForm.fillName(user.name)
        this.RegistrationForm.fillEmail(user.email)
        this.RegistrationForm.fillPass(user.pass)
        this.RegistrationForm.submit()
        return this
    }

    removeUser(id){
        this.UserTable.removeUser(id)
        return this
    }

    checkNoErrors(){
        this.RegistrationForm.getErrors().should('not.exist')
        return this
    }

    checkNameError(){
        this.RegistrationForm.getErrors().contains('Por favor, insira um nome completo.')
        return this
    }

    checkEmailError(){
        this.RegistrationForm.getErrors().contains('Por favor, insira um e-mail válido.')
        return this
    }
    
    checkPassError(){
        this.RegistrationForm.getErrors().contains('A senha deve conter ao menos 8 caracteres.')
        return this
    }

    checkInsertedUser(user, id){
        this.UserTable.getUserId(id).contains(id)
        this.UserTable.getUserEmail(id).contains(user.email)
        this.UserTable.getUserName(id).contains(user.name)
        return this
    }

    checkDeletedUser(id){
        this.UserTable.getUserId(id).should('not.exist')
        this.UserTable.getUserEmail(id).should('not.exist')
        this.UserTable.getUserName(id).should('not.exist')
        return this
    }

    checkInsertedManyUsers(users){
        users.forEach(user=>{
            const rowNumber = users.indexOf(user)+1
            this.UserTable.getUserId(rowNumber).contains(rowNumber)
            this.UserTable.getUserEmail(rowNumber).contains(user.email)
            this.UserTable.getUserName(rowNumber).contains(user.name)
        })
        return this
    }

}

export default UserRegistration