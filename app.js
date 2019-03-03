const request = require('request')

const url = "https://api.darksky.net/forecast/785fa09a9c9259fe91a7c9c40930b6c4/37.8267,-122.4233"

request({url},(err, response)=>{
    const data = JSON.parse(response.body)
})