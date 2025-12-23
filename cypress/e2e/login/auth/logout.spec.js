describe('Authentication – Logout', () => {
  beforeEach(() => {
    cy.login('admin', 'password123');
  });

  it('should logout successfully and redirect to login page', () => {
    cy.get('[data-cy=logout]').click();
    cy.url().should('include', '/login');
  });
});
