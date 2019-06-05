module.exports = {


    /**
     *  COMMON ACTIONS - STEPS
     */


    setValue: function (selector, value) {
        helpers.elementToBeClickable(selector);
        helpers.click(selector);
        browser.clearElement(selector);
        browser.keys(value);
    },

    click: function (selector) {
        try {
            helpers.waitElementEnabled(selector);
            browser.click(selector);
            // browser.pause(1000);

        } catch (e) {
            helpers.waitElementEnabled(selector);
            browser.click(selector);
        }
    },

    elementToBeClickable: function (selector) {

        browser.waitUntil(function () {
            return browser.isExisting(selector) === true
        });

        browser.waitUntil(function () {
            return browser.isVisible(selector) === true
        });

        browser.waitUntil(function () {
            return browser.isEnabled(selector) === true
        });
    },






    getText: (selector) => {
        browser.waitUntil(function () {
            return browser.isVisible(selector) === true;
        },envConfig.defaultWaitUntilTimeout,
            'Could not find element after: ' + envConfig.defaultWaitUntilTimeout,
            envConfig.defaultPollingTime);

        return browser.getText(selector);
    },

    /**
     *
     *  COMMON ACTIONS FOR ELEMENT FROM LIST OF ELEMENTS
     */

    getElementTextFromListOfElements: (selector, itemIndex) => {
        let elements, element;

            browser.waitUntil(function () {
                return (browser.elements(selector).value).length !== 0
            });

            elements = browser.elements(selector);
            element = elements.value[itemIndex];

            return browser.elementIdText(element.ELEMENT).value;

    },
    getListOfElementsText: (selector) => {
        let elements, array = [];

        browser.waitUntil(function () {
            return (browser.elements(selector).value).length !== 0
        });
        elements = browser.elements(selector).value;

        for (let index = 0; index < elements.length; index++) {
            array[index] = helpers.getElementTextFromListOfElements(selector, index);
        }
        return array;
    },


    getLastElementFromListOfElements: (selector) => {
        let elements, lastElementIndex;

        browser.waitUntil(function () {
            return (browser.elements(selector).value).length !== 0
        });

        elements = browser.elements(selector);
        lastElementIndex = elements.value.length - 1;

        return elements.value[lastElementIndex];
    },





    waitElementEnabled: (selector) => {

        try {

            browser.waitUntil(function () {
                return browser.isEnabled(selector) === true
            },envConfig.defaultWaitUntilTimeout, ' === ELEMENT IS NOT ENABLED === \n',envConfig.defaultPollingTime);

        } catch (e) {

            browser.waitUntil(function () {
                return browser.isEnabled(selector) === true
            },envConfig.defaultWaitUntilTimeout, ' === ELEMENT IS NOT ENABLED === \n',envConfig.defaultPollingTime);
        }

    },


    clickElementFromListOfElements: (selector, itemIndex) => {
        let elements, element;

        browser.waitUntil(function () {
            return (browser.elements(selector).value).length !== 0
        });


        elements = browser.elements(selector);
        element = elements.value[itemIndex];

        browser.waitUntil(function () {
            return browser.elementIdEnabled(element.ELEMENT).value === true;
        });

        browser.elementIdClick(element.ELEMENT);

    },


    clickOnTextFromListOfElements: (selector, text) => {
        let elements;

        browser.waitUntil(function () {
            return (browser.elements(selector).value).length !== 0
        });
        elements = browser.elements(selector).value;

        for(let index = 0; index < elements.length; index++) {
            if (helpers.getElementTextFromListOfElements(selector, index) === text) {
                helpers.clickElementFromListOfElements(selector, index);
            }
        }
    },

    isElementDisplayed(selector) {
        let isFound = false;
        try {
            isFound = browser.isVisible(selector);

        } catch (e) {
            // when not found do nothing and just return false
        }

        return isFound;
    },
    getElementTextFromListOfElements: (selector, itemIndex) => {
        let elements, element;

        browser.waitUntil(function () {
            return (browser.elements(selector).value).length !== 0
        });

        elements = browser.elements(selector);
        element = elements.value[itemIndex];

        return browser.elementIdText(element.ELEMENT).value;

    },
    waitElementAppear: (selector) => {
        browser.waitUntil(function () {
            return browser.isExisting(selector) === true
        },10000);

    },
    waitUntilUrlChange: (url) => {
        browser.waitUntil(function () {
            return browser.getUrl() !== url
        },10000);

    },
    getCurrentPageUrl: () => {
            return browser.getUrl()
    },


    maximize(){
        let windowHandle = browser.windowHandle();
        browser.windowHandleMaximize('{'+windowHandle.value+'}');
    }
};
