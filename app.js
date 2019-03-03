const request = require('request')
const chalk = require('chalk')
const {url} = require('./config/config')

request({url, json: true},(err, response)=>{
    if(err){
        console.log(chalk.bold.red.inverse('error exists'))
    } else {
        console.log(`It is currently ${chalk.bold.blue.inverse(response.body.currently.temperature)}`)
        console.log(`${chalk.bold.blue.inverse(response.body.daily.summary)}`)
        console.log(`${chalk.bold.red.inverse(response.body.daily.data[0].summary)}`)
    }
   
})