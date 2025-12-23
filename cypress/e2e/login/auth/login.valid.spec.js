import LoginPage from '../../pages/LoginPage';

describe('Authentication – Valid Login', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    loginPage.login('admin', 'password123');
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });
});
