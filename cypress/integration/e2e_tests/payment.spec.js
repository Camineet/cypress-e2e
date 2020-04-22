describe('Payment Test', () => {
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

	it('should send new payment(fake)', () => {
		cy.get('a').contains('Pay Bills').click();
		cy.get('a').contains('Pay Saved Payee').should('be.visible');
		cy.get('#sp_payee').select('wellsfargo');
		cy.get('#sp_account').select('5');
		cy.get('#sp_amount').type('100');
		cy.get('#sp_date').type('2020-01-10 {enter}');
		cy.get('#sp_description').type('description');
		cy.get('#pay_saved_payees').click();
	});
	it('should display success message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The payment was successfully submitted');
	});
});
