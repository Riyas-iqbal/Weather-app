const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');

module.exports = {

    index(req, res) {
        const visitorIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress; //retrieve the IP address of visitor
        console.log(visitorIp);

        res.render('index', {
            title: 'CloudCast',
            name: 'Riyas Iqbal'
        })
    },

    weather(req, res) {
        console.log('req received weather')
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
                forecast(data, (error, 
                    { 
                        temperature,
                        feelslike,
                        description,
                        icon,
                        pressure,
                        humidity,
                        visibility
                    } = {}) => {

                    if (error) {
                        return res.send({
                            error: error
                        })
                    } else {
                        return res.json({
                            temperature,
                            weather:`${description}, it is currently ${temperature} degress out. it feels like ${feelslike} degrees out`,
                            location: data.location,
                            address: req.query.address,
                            icon,
                            pressure,
                            humidity,
                            visibility
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
            helpText: 'Coming soon...',
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