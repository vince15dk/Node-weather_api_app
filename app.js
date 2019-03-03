const request = require('request')
const chalk = require('chalk')
const {url, geoCode} = require('./config/config')

request({url, json: true},(err, response)=>{
    if(err){
        console.log(chalk.bold.red.inverse('Unable to connect to weather service!'))
    } else if (response.body.error){
        console.log('Unable to find location')
    } 
    else {
        console.log(`It is currently ${chalk.bold.blue.inverse(response.body.currently.temperature)}`)
        console.log(`${chalk.bold.blue.inverse(response.body.daily.summary)}`)
        console.log(`${chalk.bold.red.inverse(response.body.daily.data[0].summary)}`)
    }
   
})

request({url: geoCode, json:true},(err, response)=>{
    if(err){
        console.log(chalk.bold.red.inverse('Unable to connect to geocode service!')) 
    } else if(response.body.features.length === 0){
        console.log('Unable to find location')
    }
    else {
        const latitude = response.body.features[0].geometry.coordinates[0];
        const longitude = response.body.features[0].geometry.coordinates[1];

        console.log(latitude)
        console.log(longitude)
    }
})

