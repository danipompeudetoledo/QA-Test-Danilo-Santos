import {el} from './elements'
import alert from '../../components/alert'

class loginPage {

constructor(){
    this.alert = alert
}

    go(){
        cy.visit('my-account/')
    }

    form(user){
        cy.get(el.email)
            .clear()
            .type(user.email)
        cy.get(el.password)
            .clear()
            .type(user.password)

    }

    submit(){
        cy.get(el.signInButton)
            .click()
    }
}

export default new loginPage()