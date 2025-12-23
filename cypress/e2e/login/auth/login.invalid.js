import LoginPage from '../../pages/LoginPage';

describe('Authentication – Invalid Login', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should display error message for invalid credentials', () => {
    loginPage.login('admin', 'wrongpassword');
    loginPage.errorMessage().should('be.visible')
      .and('contain.text', 'Invalid username or password');
  });
});
