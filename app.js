const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')





geocode('busan', (err, data)=>{
    if(err){
        console.log('Err', err)
        return
    }
    console.log('Data', data)
    forecast(data.latitude, data.longitude,(err, data)=>{
        if(err){
            console.log('Err', err)
            return
        }
        console.log('Data', data)
    })

})

// geocode('seoul', (err, data)=>{
//     if(err){
//         console.log('Err', err)
//         return
//     }
//     console.log('Data', data)

// })
