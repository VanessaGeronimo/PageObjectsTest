
class RegistrationForm{
    fillName(nameValue){
        this.#fill('name', nameValue)
        return this
    }

    fillEmail(emailValue){
        this.#fill('email', emailValue)
        return this
    }

    fillPass(passValue){
        this.#fill('password', passValue)
        return this
    }

    #fill(id, value){
        const name = cy.get(`#${id}`)
        name.clear()
        name.type(value)
    }

    submit(){
        const button = cy.get('#register')
        button.click()
    }

    getErrors(){
        const errors = cy.get('p.error')
        return errors
    }

}

export default RegistrationForm