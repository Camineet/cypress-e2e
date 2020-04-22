describe('Find Transaction Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html');
		cy.get('#signin_button').click();
		cy.fixture('user').then((user) => {
			const username = user.id;
			const password = user.password;
			cy.login(username, password);

			cy.get('.nav-tabs').should('be.visible');
		});
	});
	it('should filter transactions', () => {
		cy.get('#account_activity_tab').click();
		cy.get('a').contains('Find Transactions').click();
		cy.get('#aa_fromAmount').type('200');
		cy.get('#aa_toAmount').type('1000');
		cy.get('button[type="submit"]').click();
	});
	it('should display results', () => {
		cy.get('#filtered_transactions_for_account').should('be.visible');
		cy.get('tbody > tr').its('length').should('be.gt', 0);
	});
});
