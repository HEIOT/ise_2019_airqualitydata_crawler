const baseurl = process.env.BASEURL || "heieducation-staging.ifi.uni-heidelberg.de";
const apiToken = process.env.APITOKEN

module.exports = {
    requestIntervalMS: 60 * 60 * 1000, //every hour

    apiToken: apiToken,
    apiEndpoint: 'https://api.waqi.info/feed',

    storeApiEndpoint: 'https://' + baseurl + '/api/publisher/addDataDirectly',
    local: false,

    citiesToCrawl: {
        heidelberg: 1,
        mannheim: 2,
        karlsruhe: 3,
        wiesloch: 4,
        heilbronn: 5,
        heppenheim: 6,
        worms: 7,
        kaiserslautern: 8
    },

    saveFileName: 'data.json'
}