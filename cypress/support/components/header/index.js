import {el} from './elements'

class Header{

    userLoggedIn(expectText){
        cy.contains(el.fullName, expectText,{timeout:7000})
            .should('be.visible')
            //.should('have.text', expectText)
    }

}
 export default new Header()
