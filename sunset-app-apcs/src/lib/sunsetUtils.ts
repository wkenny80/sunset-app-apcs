export const MIN_CLOUDS = 35;
export const MAX_CLOUDS = 65;
export const MIN_HUMIDITY = 20;
export const MAX_HUMIDITY = 70;


export function qualifySunset(weather : {
    clouds : number,
    humidity : number
}) : number {
    if (weather.clouds < MIN_CLOUDS || weather.clouds > MAX_CLOUDS) {
        return 1;
    } else if (weather.humidity < MIN_HUMIDITY || weather.humidity > MAX_HUMIDITY) {
        return 2;
    }
    return 0;
}