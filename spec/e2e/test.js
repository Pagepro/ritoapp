describe('TEST NAME', function() {

    it('should display list of champs', function() {
        browser.get('http://localhost:3000');

        element(by.css('[href="#/champions"]')).click();
        var champsList = element.all(by.repeater('chmp in champ.data'));
        expect(champsList.count()).toBeDefined();
    });
});
