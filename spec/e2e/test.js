describe('TEST NAME', function() {

    it('should display list of champs and search for Azir champ', function() {
        browser.get('http://localhost:3000');

        element(by.css('[href="#/champions"]')).click();
        var champsList = element.all(by.repeater('chmp in champ.data'));
        expect(champsList.count()).toBeDefined();
        element(by.model('champNameFilter.name')).sendKeys('\'');
        expect(champsList.count()).toEqual(5);
        element(by.model('champNameFilter.name')).clear().sendKeys('azir');
        expect(champsList.count()).toEqual(1);
        element(by.css('.champ-link')).click();
        expect(element(by.binding('champion.stats.hp')).getText()).toEqual('524.4'); // Azir's health is equal to 524.4
    });


});
