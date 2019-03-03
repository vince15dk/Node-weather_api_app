const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
    console.log('Please provide an address')
} else {

    // 1. callback
    // geocode(address, (err, {latitude, longitude, location })=>{
    //     if(err){
    //         console.log('Err', err)
    //         return
    //     }
    //     forecast(latitude, longitude,(err, forecastData)=>{
    //         if(err){
    //             console.log('Err', err)
    //             return
    //         }
    //         console.log(location)
    //         console.log(forecastData)
    //     })
    
    // })


    // 2. promise 1 (returning data to chain the promise)
    // let locationData = ''
    // geocode(address).then(({latitude, longitude, location })=>{
    //     locationData = location
    //     return forecast(latitude, longitude)
    // }).then(forecastData=>{
    //     console.log(locationData)
    //     console.log(forecastData)
    // }).catch(err=>{
    //     return console.log('Err', err)
    // })


    // 3. promise 2 (chaining next to inner function to call the outher value)
    geocode(address).then(({latitude, longitude, location })=>{
        locationData = location
        forecast(latitude, longitude).then(forecastData=>{
            console.log(location)
            console.log(forecastData)
        })
    }).catch(err=>{
        return console.log('Err', err)
    })

    
    // 4. await/async
    // (async () => {
    //     try{
    //         const {latitude, longitude, location} = await geocode(address);
    //         const forecastData = await forecast(latitude, longitude);
    //         console.log(location)
    //         console.log(forecastData)
    //     }catch(err){
    //         console.log('Err', err)
    //     }
    // })();
}
