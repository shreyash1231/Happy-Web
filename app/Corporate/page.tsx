import Header from "@/components/Header";
import Sessions from "@/components/Sessions";
import Wellness from "@/components/Wellness";
import { Session } from "inspector/promises";


export default function Corporate(){
    return(
        <div>
            <Header/>
            <Wellness/>
            <Sessions/>
        </div>
    );
}