class Auth {

  elements = {
    loginUsernameInput: () => cy.get("#loginusername"),
    loginPasswordInput: () => cy.get("#loginpassword"),
    signupUsernameInput: () => cy.get("#sign-username"),
    signupPasswordInput: () => cy.get("#sign-password"),
    loginBtn: () => cy.contains("Log in"),
    signupBtn: () => cy.contains("Sign up")
  }

  getLoginUsernameInput() {
    return this.elements.loginUsernameInput()
  }

  getLoginPasswordInput() {
    return this.elements.loginPasswordInput()
  }

  getSignupUsernameInput() {
    return this.elements.signupUsernameInput()
  }

  getSignupPasswordInput() {
    return this.elements.signupPasswordInput()
  }

  getLoginBtn() {
    return this.elements.loginBtn()
  }

  getSignupBtn() {
    return this.elements.signupBtn()
  }

}

export const auth = new Auth