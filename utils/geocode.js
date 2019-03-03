const request = require('request')
const {geoCode} =require('../config/config')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${geoCode}&limit=1`
    request({url, json:true}, (err, response)=>{
        if(err) {
            callback('Unable to connect to geocode service!', undefined)
        } else if (response.body.features.length === 0){
            callback('Unable to find location',undefined)
        } 
        else {
            callback(undefined, {
                latitude: response.body.features[0].geometry.coordinates[0],
                longitude: response.body.features[0].geometry.coordinates[1],
                location: response.body.features[0].place_name
            })
        }
    })

}

module.exports = geocode