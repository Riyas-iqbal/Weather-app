const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');

module.exports = {

    index(req, res) {
        res.render('index', {
            title: 'Weather',
            name: 'Riyas'
        })
    },

    weather(req, res) {
        if (!req.query.address) {
            return res.send({
                error: 'Please provide an address'
            });
        }
        geocode(req.query.address, (error, data) => {
            if (error) {
                return res.send({
                    error: error
                })
            } else {
                console.log(data)
                forecast(data, (error, { temperature, feelslike , description } = {}) => {
                    if (error) {
                        return res.send({
                            error: error
                        })
                    } else {
                        return res.json({
                            weather:`${description}, it is currently ${temperature} degress out. it feels like ${feelslike} degrees out`,
                            location: data.location,
                            address: req.query.address
                        })
                    }
                })
            }
        })
    },

    about(req, res) {
        res.render('about', {
            title: 'About',
            name: 'Riyas'
        })
    },
    help(req, res) {
        res.render('help', {
            title: 'Help',
            helpText: 'this is help text',
            name: 'Riyas'
        })
    },
    error(req, res) {
        res.render('404', {
            title: 'Error',
            errorMessage: 'this is error text',
            name: 'Riyas'
        })
    }
}