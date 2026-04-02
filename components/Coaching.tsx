import { Card } from "./ui/card";
import Image from "next/image";

export default function Coaching(){
    return(
        <div className="px-4 pt-8 xl:p-16">
            <div className="flex flex-col gap-4 xl:gap-10">
                <span className="text-center text-lg xl:text-4xl"><span>Programs designed for emotional clarity and growth</span></span>
                <span className="text-center text-sm xl:text-3xl text-[#c39e86]">
                    <span>Happy Ho offers a range of coaching, meditation, counselling, and healing programs<br className="xl:block hidden"/> designed for individuals, professionals, and organizations. These programs integrate <br className="xl:block hidden"/> positive psychology, ancient wisdom, and practical coaching tools to improve well-<br className="xl:block hidden"/>being, creativity, productivity, and resilience. </span>
                </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 xl:mt-10 pt-10 xl:pt-25">
                <Card className="flex h-110 w-85 flex-col border-3 border-yellow-400 gap-0 p-0 rounded-4xl">
                    <div className="flex flex-col w-full items-center justify-center rounded-t-xl bg-[#dcd8ce]">
                        <Image
                        src="/3.png"
                        alt="Meditation"
                        width={140}
                        height={140}
                        />
                        <span className="text-4xl text-[#3d3020] mb-5">Coaching</span>
                    </div>
                    <div className="flex flex-col px-2 xl:px-4 text-[#544120] gap-3 pt-3">
                        <span className="text-sm">Guided sessions that help individuals and teams develop emotional intelligence, clarity in decision-making, and resilience in professional and personal life.</span>
                        <span className="text-sm">Happy Ho coaches combine psychological research with ancient wisdom to help people improve productivity, relationships, and well-being.</span>
                    </div>
                </Card>
                <Card className="flex h-110 w-85 flex-col border-3 border-yellow-400 gap-0 p-0 rounded-4xl">
                    <div className="flex flex-col w-full items-center justify-center rounded-t-xl bg-[#7d8d83]">
                        <Image
                        src="/4.png"
                        alt="Meditation"
                        width={140}
                        height={140}
                        />
                        <span className="text-4xl text-[#3d3020] mb-5">Meditation</span>
                    </div>
                    <div className="flex flex-col px-2 xl:px-4 text-[#544120] gap-3 pt-3">
                        <span className="text-sm">Meditation programs help train the mind to become more present, calm, and focused through guided awareness practices and breath observation.</span>
                        <span className="text-sm">Regular meditation can reduce anxiety, improve clarity, and support emotional balance.</span>
                    </div>
                </Card>
                <Card className="flex h-110 w-85 flex-col border-3 border-yellow-400 gap-0 p-0 rounded-4xl">
                    <div className="flex flex-col w-full items-center justify-center rounded-t-xl bg-[#3f5c4a]">
                        <Image
                        src="/5.png"
                        alt="Meditation"
                        width={140}
                        height={140}
                        />
                        <span className="text-4xl text-[#3d3020] mb-5">Healing</span>
                    </div>
                    <div className="flex flex-col px-2 xl:px-4 text-[#544120] gap-2 pt-3">
                        <span className="text-sm">Holistic healing sessions focus on restoring balance in mind, body, and emotions through energy healing, mindfulness, and spiritual practices.</span>
                    </div>
                </Card>
            </div> 
        </div>
    );
}