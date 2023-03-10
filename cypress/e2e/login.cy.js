import {url, login_password, login_username} from '../../configu'
import Navbar from '../page-objects/components/Navbar'
import LoginPage  from '../page-objects/pages/LoginPage'

describe('Login Failed Test', () => {
  before(function() {
    cy.visit(url)
    Navbar.clickSignIn()
  })

  it('Should try to login with invalid credentials', () =>{
    LoginPage.login('invalid username', 'invalid password')
  })

  it('Should display error message', () => {
    LoginPage.displayErrorMessage()
  })
})

describe('Login Success Test', () => {
  before(function() {
    cy.visit(url)
    Navbar.clickSignIn()
  })

  it('Should login into application', () => {
    LoginPage.login(login_username, login_password)
  })
  
})
