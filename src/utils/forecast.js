const request = require('request')


const forecast = (data, callback) => {
    
    const API_KEY = process.env.WEATHER_STACK_API_KEY
    
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${data.latitude},${data.longitude}`

    request({ url, json: true }, (error, response) => {
        if (error) {
            console.log('error : '+error)
            callback('Unable to connect to forecast', undefined)
        } else if (response.body.error) {
            callback('Unable to proide search result', undefined)
        } else {
            callback(undefined, {
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike
            })
        }
    })
}

module.exports = forecast

