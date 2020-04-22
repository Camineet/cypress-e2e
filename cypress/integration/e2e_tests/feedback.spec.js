describe('Feedback Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html');
		cy.contains('Feedback').click();
	});

	it('should load feedback form', () => {
        cy.get('h3').contains('Feedback');
        cy.get('form').should('be.visible');
	});

	it('should fill feedback form', () => {
		cy.get('#name').type('my name');
		cy.get('#email').type('my email');
		cy.get('#subject').type('my subject');
		cy.get('#comment').type('my comment');
	});

	it('should submit the form', () => {
		cy.get('.btn-signin').click();
	});

	it('should display the correct content', () => {
        cy.get('#feedback-title').contains('Feedback');
		cy.get('.offset3').should('contain', 'Thank you');
	});
});
