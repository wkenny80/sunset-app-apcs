export const WEATHER_POINT_API_URL = "https://api.weather.gov/points/";
export const WEATHER_API_URL = "https://api.weather.gov/gridpoints/";
export const GEOLOCATION_API_URL = "https://ipwho.is/";
export const HUMIDITY_API_URL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=4aa906615a8dbd7c374c7f617de5396e"

export async function getWeather() : Promise<any> {
    const geolocationRes : any = await (await fetch(GEOLOCATION_API_URL)).json();

    const latitude = geolocationRes.latitude;
    const longitude = geolocationRes.longitude;

    const secondaryWeatherRes = await (await fetch(HUMIDITY_API_URL.replaceAll("{lat}", latitude).replaceAll("{lon}", longitude))).json();

    console.log(secondaryWeatherRes);

    const pointRes : any = await (await fetch(WEATHER_POINT_API_URL + `${geolocationRes.latitude + ',' + geolocationRes.longitude}`)).json();
    const gridIdentifier = pointRes.properties.gridId;
    const pointX = pointRes.properties.gridX;
    const pointY = pointRes.properties.gridY;

    const weatherRes = (await (await fetch(WEATHER_API_URL + `${gridIdentifier}/${pointX},${pointY}/forecast`)).json()).properties.periods[0];

    return {
        weatherRes: weatherRes,
        secondaryWeatherRes: secondaryWeatherRes
    };
}
