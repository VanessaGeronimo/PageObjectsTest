class UserTable{
    getUserId(index){
        return  cy.get(`#tdUserId${index}`)
    }
    
    getUserEmail(index){
        return  cy.get(`#tdUserEmail${index}`)
    }

    getUserName(index){
        return  cy.get(`#tdUserName${index}`)
    }

    removeUser(id){
        cy.get(`#removeUser${id}`).click()
    }

}

export default UserTable