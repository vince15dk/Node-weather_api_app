const request = require('request')
const {geoCodeToken} =require('../config/config')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${geoCodeToken}&limit=1`
    request({url, json:true}, (err, response)=>{
        if(err) {
            callback('Unable to connect to geocode service!', undefined)
        } else if (response.body.features.length === 0){
            callback('Unable to find location',undefined)
        } 
        else {
            callback(undefined, {
                longitude: response.body.features[0].geometry.coordinates[0],
                latitude: response.body.features[0].geometry.coordinates[1],
                location: response.body.features[0].place_name
            })
           
        }
    })

}

module.exports = geocode