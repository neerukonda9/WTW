const main = require('../main.conf');
const merge = require('deepmerge');
const localIdentifier = `foobar_${Math.round(Math.random() * 100)}_${Date.now()}`;
const user = null;
// const request = require('request-promise');

let tags, tag;
var timeouts = process.env.DEBUG ? 999999999 : 30000;
// if you want to run your tests in debug DEBUG=true npm run dev
exports.config = merge(main.config, {
    specs: [

        './test/features/homepage.feature',
    ],

    suites:{
        homepage:[
            // './test/features/homepage.feature',
        ],
        search:[
            // './test/features/search.feature',
        ]

    },

    capabilities: [
        {
            browserName: 'chrome',

            maxInstances: 1,

        },
    ],

    logLevel: 'silent',
    baseUrl: 'https://www.willistowerswatson.com/',

    cucumberOpts: {
        // tags: ['@test'],
        // timeout: timeouts

    },
    port: '9515',
    path: '/',
    services: ['chromedriver'],
});
