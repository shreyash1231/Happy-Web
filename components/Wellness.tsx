import { Button } from "./ui/button";




export default function wellness(){
    return(
        <div className="p-16">
            <div className="flex flex-col ml-70 gap-6">
                <div className="flex flex-col">
                    <span className="text-4xl">
                        <strong>Corporate</strong>
                    </span>
                    <span className="text-4xl">
                        <strong>Wellness Programs</strong>
                    </span>
                </div>
                <span className="text-2xl">
                    <strong>Build emotionally resilient and high-performing teams.</strong>
                </span>
                <span className="text-xl text-[#c39e86]">
                    <strong>Happy Ho corporate programs help organizations<br/> improve employee well-being, leadership effectiveness,<br/> emotional intelligence, and workplace harmony.</strong>
                </span>
                <span className="flex gap-8">
                    <Button className="w-70 h-10 p-6 rounded-4xl bg-[#3f5c4a] text-[#c39e86] border-2 border-yellow-400">Book Corporate Consultation</Button>
                    <Button className="text-[#c39e86] w-60 p-6 h-10 rounded-4xl bg-[#f3efe8] border-2 border-[#3f5c4a]">Explore Programs</Button>
                </span>
            </div>
        </div>
    );
}