module.exports = {


    navigate: (pageToNavigate) => {

        pageToNavigate = pageToNavigate.toLowerCase();

        switch (pageToNavigate) {

            case 'homepage':
                browser.url(envConfig.url.baseUrl);
                break;

            default:
                browser.url(envConfig.url.baseUrl);
                logger.info('==== Navigating to default Home Page!!!! ====');
                break;
        }
    },


};
