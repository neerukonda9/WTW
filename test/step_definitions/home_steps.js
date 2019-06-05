const homePage = require('../pages/frontend/homePage');
const searchResultsPage = require('../pages/frontend/searchResultsPage');


module.exports = function () {

    this.Given(/^I am on homepage with (.+)$/, (countryLanguage) => {
        homePage.navigationToHomePage();
        homePage.selectCountryAndLanguageStore(countryLanguage);

    });

    this.When(/^I perform search with (.+)$/, (searchText) => {
        homePage.performSearch(searchText);
    });

    this.Then(/^I see search results displayed$/, () => {
        console.log(searchResultsPage.isSearchResultsDisplayed());
    });
    this.Then(/^I set results sort by Date$/, () => {
        searchResultsPage.selectSortByDate();
    });

    this.Then(/^I refined search industry (.+)$/, (industryFilter) => {
        searchResultsPage.filterIndustryBy(industryFilter)
    });
    this.Then(/^I see all search results$/, () => {
        console.log(searchResultsPage.getAllArticleTitles());
    });


};