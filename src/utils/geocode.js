const request = require('request')


const geocode = (address, callback)=>{
    
    const MAPBOX_API_KEY = process.env.MAPBOX_API_KEY

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${MAPBOX_API_KEY}&limit=1`
    
    request({url,json:true},(error,response)=>{
        if (error) {
            callback('Unable to connect to location services!',undefined)
        } else if (response.body.features.length === 0){
            callback('Unable to find location. Try another search.',undefined)
        } else {
            callback(undefined,{
                longitude:response.body.features[0].center[0],
                latitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode