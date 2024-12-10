'use client'
import {useState} from "react";
import LinkedAlertComponent from "@/components/variable/LinkedAlertComponent";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default function Home() {
    const [displayVariable, setDisplayVariable] = useState<string>("");
    const [clouds, setClouds] = useState<boolean>();
    const [humidity, setHumidity] = useState<number>(-1);
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
                    <LinkedAlertComponent stateHeader={"Clouds"} state={clouds}/>
                    <LinkedAlertComponent stateHeader={"Humidity"} state={humidity}/>

                </div>
            </main>
        </div>
);
}
