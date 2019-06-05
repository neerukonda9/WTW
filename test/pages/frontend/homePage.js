const homePage = {

    /**
     *  Home page
     */


    searchTextBoxSelector: {value: '.wtw-main-nav.row #site_search'},
    searchTextSearchButtonSelector: {value: '.wtw-main-nav.row .input-group-addon button[type="submit"]'},
    languageCountrySelector: {value: '#btnCountrySelector'},
    languageCountriesSelector: {value: '.split-list .sub-list li span'},


    navigationToHomePage() {
        helpers.maximize();
        navigation.navigate("HomePage");
        homePage.setCookieLocalStorage();
        browser.refresh();
    },

    performSearch(searchText) {
        helpers.waitElementAppear(homePage.searchTextBoxSelector.value)
        helpers.setValue(homePage.searchTextBoxSelector.value, searchText);
        helpers.click(homePage.searchTextSearchButtonSelector.value);
    },

    selectCountryAndLanguageStore(selectCountry) {
        if (homePage.getLanguage().trim() !== selectCountry) {
            helpers.click(homePage.languageCountrySelector.value)
            helpers.clickOnTextFromListOfElements(homePage.languageCountriesSelector.value, selectCountry)
        }
    },
    getLanguage() {
        return helpers.getText(homePage.languageCountrySelector.value);
    },

    setCookieLocalStorage() {
        browser.localStorage('POST', {
            key: 'truste.eu.cookie.notice_preferences',
            value: '{"name":"truste.eu.cookie.notice_gdpr_prefs","value":"0,1,2:","path":"/","expires":' + new Date().getTime() + 1 + '}'
        })
        browser.localStorage('POST', {
            key: 'truste.eu.cookie.notice_gdpr_prefs',
            value: '{"name":"truste.eu.cookie.notice_preferences","value":"2:","path":"/","expires":' + new Date().getTime() + 1 + '}'
        })

    }




};

module.exports = homePage;
