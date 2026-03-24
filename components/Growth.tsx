import { Card } from "./ui/card";
import Image from "next/image";

export default function Growth(){
    return( 
        <div className="px-4 pt-8  xl:p-16">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <span className="text-3xl xl:text-6xl text-center">
                        Our Philosophy
                    </span>
                    <span className="text-[#c39e86] text-center text-xl xl:text-4xl">
                        Growth through awareness and practice
                    </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 xl:mt-10">
                    <Card className="flex h-105 w-85 flex-col border-3 border-yellow-400 bg-[#7d8d83]">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/5.png"
                                alt="Meditation"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="flex flex-col px-2 xl:px-4 text-[#dcd8ce]">
                            <span className="text-5xl">Clarity</span>
                            <p className="text-xl font-bold">
                                Understanding your thoughts, emotions, and patterns is the first step toward meaningful change.
                            </p>
                        </div>
                    </Card>
                    <Card className="flex h-105 w-85 flex-col border-3 border-yellow-400 bg-[#7d8d83]">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/3.png"
                                alt="Meditation"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="flex flex-col px-2 xl:px-4 text-[#dcd8ce]">
                            <span className="text-5xl">Practice</span>
                            <p className="text-xl font-bold">
                                We help you develop emotional stability so you can respond to life with presence rather than overwhelm.
                            </p>
                        </div>
                    </Card>

                    <Card className="flex h-105 w-85 flex-col border-3 border-yellow-400 bg-[#7d8d83]">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/4.png"
                                alt="Meditation"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="flex flex-col px-2 xl:px-4 text-[#dcd8ce]">
                            <span className="text-5xl">Practice</span>
                            <p className="text-xl font-bold">
                                Lasting well-being is built through small daily practices that strengthen resilience and self-awareness.
                            </p>
                        </div>
                    </Card>
                </div> 
            </div>
        </div>
    );
}