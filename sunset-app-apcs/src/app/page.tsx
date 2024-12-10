'use client'
import {useState} from "react";
import LinkedAlertComponent from "@/components/variable/LinkedAlertComponent";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {getWeather} from "@/lib/weatherUtils";

export default function Home() {
    const [displayVariable, setDisplayVariable] = useState<string>("");
    const [forecast, setForecast] = useState<string>("");
    const [clouds, setClouds] = useState<boolean>();
    const [humidity, setHumidity] = useState<number>(-1);
    const [temp, setTemp] = useState<number>(-1);
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-row gap-16 row-start-2 items-center sm:items-start">
                <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <LinkedAlertComponent stateHeader={"Test"} state={displayVariable}/>
                    <Input onInput={event => setDisplayVariable(event.currentTarget.value)} type="text"/>
                </div>
                <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <Card>
                        <CardHeader>Header</CardHeader>
                        <CardContent>broken, scattered mid to high-level clouds</CardContent>
                        <CardContent>decently low humidity</CardContent>
                        <CardContent>improves after a storm or rainfall</CardContent>
                    </Card>
                </div>
            </main>
            <main className="flex flex-row gap-16 row-start-2 items-center sm:items-start">
                <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <LinkedAlertComponent stateHeader={"Forecast"} state={forecast}/>
                    <LinkedAlertComponent stateHeader={"Clouds"} state={clouds}/>
                    <LinkedAlertComponent stateHeader={"Humidity"} state={humidity}/>
                    <LinkedAlertComponent stateHeader={"Temp"} state={temp}/>
                    <Button onClick={async () => {
                        const weather = await getWeather();
                        /*
                        detailedForecast
:
"Mostly sunny. High near 65, with temperatures falling to around 60 in the afternoon. North northwest wind around 3 mph."
endTime
:
"2024-12-10T18:00:00-08:00"
icon
:
"https://api.weather.gov/icons/land/day/sct?size=medium"
isDaytime
:
true
name
:
"Today"
number
:
1
probabilityOfPrecipitation
:
{unitCode: 'wmoUnit:percent', value: null}
shortForecast
:
"Mostly Sunny"
startTime
:
"2024-12-10T11:00:00-08:00"
temperature
:
65
temperatureTrend
:
""
temperatureUnit
:
"F"
windDirection
:
"NNW"
windSpeed
:
"3 mph"
                         */
                        console.log(weather)
                        setForecast(weather.detailedForecast);
                        setClouds(weather.shortForecast);
                        setTemp(weather.temperature);
                    }}>btn</Button>
                </div>
            </main>
        </div>
);
}
