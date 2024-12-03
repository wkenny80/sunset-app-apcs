import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Terminal} from "lucide-react";

export default function LinkedAlertComponent({stateHeader, state} : {stateHeader : string, state : any}) {
    return (
        <div>
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>{stateHeader}</AlertTitle>
                <AlertDescription>
                    {state || "empty"}
                </AlertDescription>
            </Alert>
        </div>
    )
}