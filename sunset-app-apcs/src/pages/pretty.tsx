'use client'
import {useEffect, useState} from "react";
import {getWeather} from "@/lib/weatherUtils";
import "@/app/globals.css";
import cloudy from "@/assets/cloudy.jpg";
import sunset from "@/assets/sunset.jpg";

export default function Page() {
    const [forecast, setForecast] = useState<string>("");
    const [clouds, setClouds] = useState<number>(-1);
    const [humidity, setHumidity] = useState<number>(-1);
    const [temp, setTemp] = useState<number>(-1);

    useEffect(() => {
        (async () => {
            const weather = await getWeather();
            setForecast(weather.weatherRes.detailedForecast);
            setClouds(weather.secondaryWeatherRes.clouds.all);
            setTemp(weather.weatherRes.temperature);
            setHumidity(weather.secondaryWeatherRes.main.humidity);
        })()
    }, []);

    return (
        <div className={"grid grid-rows-1 grid-cols-1 w-full h-full min-w-[100vw] min-h-screen border-border"}>
            <div
                className={"row-start-1 row-end-1 relative min-w-[100vw] min-h-[100vh] h-full w-full z-0 grid grid-rows-1 grid-cols-2 "}>
                <div className={`w-[50vw] max-w-1/2 bg-cover border-r-[1px] border-r-border`}
                     style={{backgroundImage: `url(${sunset.src})`}}/>
                <div className={"w-[50vw] max-w-1/2 bg-cover border-l-[1px]"}
                     style={{backgroundImage: `url(${cloudy.src})`}}/>
            </div>
            <div
                className={"min-w-[100vw] min-h-[100vh] h-full w-full row-start-1 row-end-1 z-10 items-center justify-items-center flex"}>
                <button
                    className={"font-extrabold text-4xl m-auto italic text-[#c5b2ae] bg-[#0c3a42] p-3 rounded-xl hover:bg-[#1b4148] active:p-3.5"}
                    onClick={(e) => {}}
                >What will today&#39;s sunset be?</button>
            </div>
        </div>
    )
}