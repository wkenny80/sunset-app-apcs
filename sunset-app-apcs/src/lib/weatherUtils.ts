export const WEATHER_POINT_API_URL = "https://api.weather.gov/points/";
export const WEATHER_API_URL = "https://api.weather.gov/gridpoints/";
export const GEOLOCATION_API_URL = "https://ipwho.is/";

export async function getWeather() : Promise<any> {
    const geolocationRes : any = await (await fetch(GEOLOCATION_API_URL)).json();
    const pointRes : any = await (await fetch(WEATHER_POINT_API_URL + `${geolocationRes.latitude + ',' + geolocationRes.longitude}`)).json();
    const gridIdentifier = pointRes.properties.gridId;
    const pointX = pointRes.properties.gridX;
    const pointY = pointRes.properties.gridY;

    const weatherRes = await (await fetch(WEATHER_API_URL + `${gridIdentifier}/${pointX},${pointY}/forecast`)).json();
    return weatherRes.properties.periods[0];
}
