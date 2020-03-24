const config = require('./config');
const axios = require('axios');
const fs = require('fs');

requestApi();
setInterval(requestApi, config.requestIntervalMS);

let lastResult = {};

async function requestApi() {
    const result = {};

    for(let city in config.citiesToCrawl) {
        result[city] = (await axios.get(`${config.apiEndpoint}/${city}/?token=${config.apiToken}`)).data.data;
    }
    console.log(result);
    console.log(config.storeApiEndpoint);

    // check if result is the same based on timestamp
    for(let city in result) {
        if(!lastResult[city] || lastResult[city].time.s != result[city].time.s) {
            // upload data
            const data = convertAirData(result[city], city);
            console.log(data)
            if(!config.local) axios.post(config.storeApiEndpoint, { data }, {auth: { username: "ISE2019", password: "ISE2019" }});
        }
    }

    lastResult = result;
}

function convertAirData(dataFromApi, city) {
    let sensors = [];
    appendToFile(config.saveFileName, dataFromApi);

    for(let data in dataFromApi.iaqi) {
        const convertedData = {
            name: data,
            type: 'number',
            value: dataFromApi.iaqi[data].v,
            date: dataFromApi.time
        }

        appendToFile(`converted-${config.saveFileName}`, {
            city: dataFromApi.city.name,
            ...convertedData
        });
        sensors.push(convertedData);
    }

    return {
        deviceId: config.citiesToCrawl[city],
        date: dataFromApi.time,
        sensors
    };
}

function appendToFile(fileName, data) {
    fs.appendFile(fileName, `\n${JSON.stringify(data)},`, (err) => {
        if (err) console.log(err);
        // console.log('The data was saved to file!');
    });
}