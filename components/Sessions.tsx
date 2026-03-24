import { Button } from "./ui/button";
import { Card } from "./ui/card";



export default function Sessions(){
    return(
        <div className="p-16">
            <div className="flex flex-col gap-15">
                <div className="flex flex-col gap-4">
                    <span className="text-center text-6xl">Pre-Curated Corporate Wellness Sessions</span>
                    <span className="text-center text-2xl text-[#c39e86]">Experiential emotional wellness workshops designed for corporate teams.</span>
                    <div className="flex justify-center gap-20 text-[#c39e86]">
                        <span>
                            <span>Techniques Used:</span>
                            <div className="flex flex-col pl-4">
                            <span>• Mindfulness</span>
                            <span>• NLP</span>
                            <span>• Meditation</span>
                            <span>• Healing Practices</span>
                            <span>• Positive Psychology</span>
                            <span>• Behavioral Interventions</span>
                            </div>
                        </span>

                        <span>
                            <span>Session Format:</span>
                            <div className="flex flex-col pl-4">
                            <span>• Duration: 4–5 hours</span>
                            <span>• Group Size: 30–35 participants</span>
                            <span>• Delivery: Interactive workshop</span>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="flex justify-center gap-10">
                    <Button className="px-20 py-6 rounded-full bg-[#544120] text-[#c39e86] border-2 border-yellow-400">
                        All Programs
                    </Button>
                    <Button className="p-6 rounded-full bg-[#f3efe8] text-[#c39e86] border-2 border-[#544120]">
                        <span className="flex flex-row gap-10">
                            <span>Leadership</span>
                            <span>|</span>
                            <span>Employee Wellness</span>
                            <span>|</span>
                            <span>HR Programs</span>
                            <span>|</span>
                            <span>Sales Teams</span>
                        </span>
                    </Button>
                </div>
                <div className="grid grid-cols-3">
                    <Card className="w-60 h-60 rounded-2xl border-2 border-black bg-[#7d8d83]">
                        
                    </Card>
                </div>
            </div>
        </div>
    );
}