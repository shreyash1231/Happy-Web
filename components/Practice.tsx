import { Button } from "./ui/button";


export default function Practice(){
    return (
        <div className="pt-8 px-4 md:p-10 xl:p-16 mx-auto max-w-[1920px]">
            <div className="flex flex-col md:gap-10 xl:gap-25">
                <div className="flex flex-col md:gap-5">
                    <span className="flex flex-col md:grid md:grid-cols-4 lg:grid-cols-3">
                        <span className="md:ml-auto md:col-span-3 lg:col-span-2">
                            <strong className="text-2xl md:text-6xl xl:text-8xl">
                                Happiness is a skill
                            </strong>
                        </span>
                    </span>
                    <span className="ml-auto">
                        <strong className=" text-2xl md:text-6xl xl:text-8xl">
                            We help you practice it.
                        </strong>
                    </span>
                </div>
                <div className="flex flex-col gap-2 text-[#c39e86] text-sm pt-6 lg:pt-0 md:text-xl xl:text-2xl">
                    <span className="md:grid md:grid-cols-3">
                        <span className="md:ml-auto md:col-span-2">
                            Happy Ho is a modern emotional wellness and life coaching <br className="hidden lg:block"/> platform designed to help individuals and organizations <br className="hidden lg:block"/> build clarity, resilience, balance, and conscious growth.
                        </span>
                    </span>
                    <span className="md:grid md:grid-cols-6 lg:grid-cols-7">
                        <span className="md:col-span-2 hidden md:block"></span>
                        <span className="md:col-span-4 items-center">
                            Through coaching, meditation, consulting, and <br className="hidden lg:block"/> transformative programs, we guide you toward sustainable <br className="hidden lg:block"/> happiness — at home, at work, and within yourself.
                        </span>
                        <span className="md:hidden block"></span>
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-2 gap-5 lg:gap-10 pt-6 md:pt-0">
                    <div className="ml-auto">
                        <Button className="bg-[#544120] md:px-10 md:py-6 rounded-full px-5 py-3 text-sm md:text-lg">Start Your Journey</Button>
                    </div>
                    <div>
                        <Button className="border-black bg-transparent md:px-10 md:py-6 rounded-full text-[#c39e86] px-5 py-3 text-sm md:text-lg">Explore Services</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}