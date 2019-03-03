const request = require('request')
const {forecastToken} = require('../config/config')

const forecast = (latitude, longitude, callback)=>{
    request({url: `https://api.darksky.net/forecast/${forecastToken}/${latitude},${longitude}?units=si&lang=ko`,
    json: true},(err, {body})=>{
        if(err){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                daily: body.daily.summary,

            })
        }
    })

}

module.exports = forecast