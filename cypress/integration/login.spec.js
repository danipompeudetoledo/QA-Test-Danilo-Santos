import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dash'


describe('Login', () => {

    context('When the user is registered',function(){

        const user = {
            name: "ceni",
            email :'ceni@gmail.com',
            password: '@spfc2022',
            is_provider: true
        }

        it('Should login successfully', () => {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            dashPage.header.userLoggedIn('Hello')

            

            
        });
    })
    
})

    context('When the user types a wrong password',function(){

        const user = {
            email :'adenor@gmail.com',
            password: 'xyz1990@'
        }

        it('Should Notify credencial error', () => {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            loginPage.alert.HaveText(': the password you entered for the username')
            
        });
    
    })
    

    context('When the user types a wrong email ',function(){

        const user = {
            email :'adeno@gmail.com',
            password: 'xyz1990@$'
        }

        it('Should not login successfully', () => {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            loginPage.alert.HaveText( 'A user could not be found with this email address.')
            
        });
    
    })

    context('When the email format is invalid',function(){
        const emails =[
            'joao.com.br',
            'aoc.com',
            '@gmail.com',
            '@',
            'dan@',
            '112',
            '&*&*$@'
        ]


        before(function(){
            loginPage.go()


        })

        emails.forEach(function(email){
            it('Do not login with  email: ' + email, function(){
                const user ={email: email, password:'pwd123'}

                
                loginPage.form(user)
                loginPage.submit()
                loginPage.alert.HaveText('is not registered on this site. If you are unsure of your username, try your email address instead.')
               

            })
        })

    } )

    context(' When all fieds are blank', function(){
        const alertMessages = ('Username is required.')
    
         
          it.only('Should display ' + alertMessages.toLowerCase(), function(){
            loginPage.go()
            loginPage.submit()
            loginPage.alert.HaveText('Username is required.')
    
          
    
        })
    })