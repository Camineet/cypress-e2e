describe('Currency Exchange Test', () => {
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
	it('should fill conversion form', () => {
		cy.get('a').contains('Pay Bills').click();
		cy.get('a').contains('Purchase Foreign Currency').click();
		cy.get('h2')
			.contains('Purchase foreign currency cash')
			.should('be.visible');
		cy.get('#pc_currency').select('GBP');
		cy.get('#pc_amount').type('100');
		cy.get('#pc_inDollars_true').click();
		cy.get('#pc_calculate_costs').click();
	});
	it('should display correct conversion amount', () => {
		cy.get('#pc_conversion_amount').should(
			'contain',
			'59.02 pound (GBP) = 100.00 U.S. dollar (USD)'
		);
	});
});
