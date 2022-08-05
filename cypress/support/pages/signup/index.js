import {el} from './elements'
import alert from '../../components/alert';

class SignupPage{

    constructor(){
        this.alert = alert
    }

    go(){
        cy.visit("/my-account/")

    }


    form(user){
      cy.get(el.email).type(user.email);
      cy.get(el.password).type(user.password);
    
    }

    submit() {
      cy.wait(7000)
      cy.contains("input", "Register").click({ force: true });
      cy.get('body')
      cy.wait(3000)
      

    }

    confirmationHaveText(expectedText){
        cy.contains('.page-content entry-content, .woocommerce,.woocommerce, .woocommerce-MyAccount-content', 'p',expectedText)
            .should('be.visible')
       


    }
    
    alertHint(expectedText){
        cy.contains('.woocommerce-password-hint', expectedText)
        .should('be.visible')

    }

    alertPopUP(expectedText){
        cy.on('window:alert', function(result){
            expect(result).to.contains(expectedText)
            .should('be.visible')

           })

    }


}
 export default new SignupPage()