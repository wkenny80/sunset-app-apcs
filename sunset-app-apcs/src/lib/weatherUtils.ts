import {Dispatch, SetStateAction} from "react";

export const WEATHER_API_URL = "https://api.weather.gov/";
export const GEOLOCATION_API_URL = "https://ip-api.com/json/%IP%";
export const IP_ADDRESS_API_URL = "https://api.ipify.org?format=json"
export function getAndSetWeather(clouds : Dispatch<SetStateAction<any>>, humidity : Dispatch<SetStateAction<any>>) {

}
export async function getWeather() : Promise<{ clouds: any, humidity: any }> {
    const ipAddress : string = (await (await fetch(IP_ADDRESS_API_URL)).json()).ip;
    const geolocationRes : any = await (await fetch(GEOLOCATION_API_URL.replace("%IP%", ipAddress))).json();
    return {clouds: "a", humidity: "a"};
}