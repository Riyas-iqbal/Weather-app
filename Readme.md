
# CloudCast - Weather App

A weather web app made in Node Express using Mapbox Geocode API and Weatherstack API would allow users to get real-time weather information for a given location. The app would use server-side rendering with Handlebars to dynamically display the weather data on the webpage.

When a user visits the webpage, they would be presented with a search bar where they can enter a location. The location data would be sent to the server, which would then use the Mapbox Geocode API to convert the location into longitude and latitude coordinates.

Once the coordinates are obtained, the server would then use the Weatherstack API to retrieve weather data for that location. The data would include information such as temperature, precipitation, humidity, wind speed, and more. The weather data would be formatted and sent to the client-side code for display.

The Handlebars template would be used to dynamically render the weather data onto the webpage. The template would include placeholders for the weather data, which would be replaced with the actual data retrieved from the API.

In addition to real-time weather data, the app could also include additional weather data, such as historical weather data, weather forecasts, and climate data. These additional data sets could be retrieved from the Weatherstack API and displayed on the webpage using the same server-side rendering technique.

Overall, a weather web app made in Node Express using Mapbox Geocode API and Weatherstack API would provide users with up-to-date weather information for any location. The server-side rendering with Handlebars would ensure that the weather data is displayed quickly and efficiently, providing a seamless user experience.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Riyas-iqbal/Weather-app.git
```

Go to the project directory

```bash
  cd Weather-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start 
```
### Options



## Screenshots

![App Screenshot](https://live.staticflickr.com/65535/52690319322_680d56e6e5_z.jpg)

![App Screenshot](https://live.staticflickr.com/65535/52691107379_4eb808ff82_z.jpg)

![App Screenshot](https://live.staticflickr.com/65535/52690838701_ec5e6fd818_z.jpg)




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`WEATHER_STACK_API_KEY`

`MAPBOX_API_KEY`



```bash
PORT = [ PORT NUMBER ]
WEATHER_STACK_API_KEY = [ YOUR WEATHER STACK API KEY ]
MAPBOX_API_KEY = [ YOUR MAPBOX API KEY ]
```
## API Reference

#### Get weather details

```http
  GET /weather?address='your location'
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `address` | `string` | **Required**. Your location name |



