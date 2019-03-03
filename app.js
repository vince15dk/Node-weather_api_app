const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
    console.log('Please provide an address')
} else {
    geocode(address, (err, {latitude, longitude, location })=>{
        if(err){
            console.log('Err', err)
            return
        }
        forecast(latitude, longitude,(err, forecastData)=>{
            if(err){
                console.log('Err', err)
                return
            }
            console.log(location)
            console.log(forecastData)
        })
    
    })
}

// geocode('seoul', (err, data)=>{
//     if(err){
//         console.log('Err', err)
//         return
//     }
//     console.log('Data', data)

// })
