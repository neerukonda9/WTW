const searchResultsPage = {

    /**
     *  Search Results page
     */


    searchPageSelector:         {value: '.search-listings'},
    searchResultsDateSelector:  {value: '.CoveoResult .coveo-date'},
    languageCountrySelector:    {value: '#btnCountrySelector span[title]'},
    languageCountriesSelector:  {value: '.split-list .sub-list li span'},
    resultsSortByDateSelector:  {value: '.CoveoSort.coveo-selected'},
    articleTitlesSelector:      {value: '.CoveoResult .coveo-title .coveo-results-title'},


    isSearchResultsDisplayed() {
        return helpers.isElementDisplayed(searchResultsPage.searchPageSelector.value)
    },

    getResultsDates() {
        return helpers.getListOfElementsText(searchResultsPage.searchResultsDateSelector.value)
    },

    selectSortByDate() {
        if (!helpers.isElementDisplayed(searchResultsPage.resultsSortByDateSelector.value)) {
            helpers.click(searchResultsPage.resultsSortByDateSelector.value)
        }
    },

    filterIndustryBy(industryValue){
        let currentUrl = helpers.getCurrentPageUrl()
        helpers.waitElementAppear('div[data-title="Industry"] [data-value="'+ industryValue + '"]')
        helpers.click('div[data-title="Industry"] [data-value="'+ industryValue + '"]')
        helpers.waitElementAppear('div[data-title="Industry"] [data-value="'+ industryValue + '"] input[checked="checked"]')
        helpers.waitUntilUrlChange(currentUrl)
    },

    getAllArticleTitles(){
        helpers.waitElementAppear(searchResultsPage.articleTitlesSelector.value);
        return helpers.getListOfElementsText(searchResultsPage.articleTitlesSelector.value);
    }


};

module.exports = searchResultsPage;
