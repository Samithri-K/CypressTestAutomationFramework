import LoginPage from '../../pages/LoginPage';

describe('Authentication – Data Driven Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should validate multiple invalid login attempts', () => {
    cy.fixture('users').then((users) => {
      users.invalidUsers.forEach(user => {
        loginPage.login(user.username, user.password);
        loginPage.errorMessage().should('be.visible');
      });
    });
  });
});
