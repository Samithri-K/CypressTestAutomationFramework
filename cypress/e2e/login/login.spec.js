import LoginPage from '../../pages/LoginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('Login with valid credentials', () => {
    loginPage.login('admin', 'password123');
    cy.url().should('include', '/dashboard');
  });
});
