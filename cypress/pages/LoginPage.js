class LoginPage {
  username() {
    return cy.get('#username');
  }

  password() {
    return cy.get('#password');
  }

  loginButton() {
    return cy.get('#login');
  }

  visit() {
    cy.visit('/login');
  }

  login(username, password) {
    this.username().type(username);
    this.password().type(password);
    this.loginButton().click();
  }
}

export default LoginPage;
