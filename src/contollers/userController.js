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