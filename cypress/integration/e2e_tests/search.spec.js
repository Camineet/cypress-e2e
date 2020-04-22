describe('Searchbox test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/');
	});
	it('should type into searchbox and submit with pressing enter', () => {
		cy.get('#searchTerm').type('some search {enter}');
	});

	it('should show search results page', () => {
		cy.get('h2').contains('Search Results');
	});
});
