describe('Transfer funds verification test', () => {
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

	it('should fill transfer funds form', () => {
		cy.get('a').contains('Transfer Funds').click();
		cy.get('#tf_fromAccountId').select('2');
		cy.get('#tf_toAccountId').select('4');
		cy.get('#tf_amount').type('1000');
		cy.get('#tf_description').type('some text');
		cy.get('#btn_submit').click();
	});

	it('should verify correct data', () => {
		cy.get('.board-header').should('be.visible').and('contain', 'Verify');
		cy.get('#tf_fromAccountId').should('have.value', 'Checking');
		cy.get('#tf_toAccountId').should('have.value', 'Loan');
		cy.get('#tf_amount').should('have.value', '1000');
		cy.get('#tf_description').should('have.value', 'some text');
	});
});
