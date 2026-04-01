
import Image from "next/image";

export default function Footer(){
    return(
        <div className="bg-[#dcd8ce] rounded-4xl p-5 md:p-10 lg:p-16">
            <div className="flex flex-col gap-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-10 lg:gap-30">
                    <div className="flex flex-col gap-2">
                        <span><strong className="text-[#544120] text-sm lg:text-xl">About</strong></span>
                        <div className="flex flex-col text-[#544120]">
                            <span>Founder’s Note</span>
                            <span>About Happy Ho</span>
                            <span>Why Happy Ho</span>
                            <span>Our Approach</span>
                            <span>How It Works</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span><strong className="text-[#544120] text-sm lg:text-xl">Our Programs</strong></span>
                        <div className="flex flex-col text-[#544120]">
                            <span>For Individuals</span>
                            <span>For Organizations</span>
                            <span>Signature Programs</span>
                       <div className="flex flex-col pl-4">
                            <span>• Cosmic</span>
                            <span>&nbsp;&nbsp; Guidance</span>
                            <span>• Meditation</span>
                            <span>&nbsp;&nbsp; Coaching</span>
                            <span>• Holistic</span>
                            <span>&nbsp;&nbsp; Healing</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-10 md:mt-0">
                        <span><strong className="text-[#544120] text-sm lg:text-xl">Content & Learning</strong></span>
                        <div className="flex flex-col text-[#544120]">
                            <span>Blogs</span>
                            <span>Videos / Reels</span>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <Image
                        src="/footerImage.png"
                        alt="Meditation"
                        width={200}
                        height={200}
                        />
                    </div>
                </div>  
                <div>
                    <div className="flex flex-col gap-2">
                        <span><strong className="text-[#544120] text-xl">Contact</strong></span>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col text-[#544120]">
                                <span>
                                    Address – Tower 7 – 202, Ace Parkway, <br/>
                                    Sector 150, Gautam Budh Nagar, 201310,<br/>
                                    NOIDA, Uttar Pradesh, India (Bharat) 
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 md:gap-15 lg:gap-30">
                                <div className="flex flex-col">
                                    <span>Mobile: (+91) 9811237999</span>
                                    <span>Email: info@happyho.in</span>
                                </div>
                                <div className="flex gap-3 mt-5 lg:mt-0 lg:ml-auto text-sm">
                                    <span>FaceBook</span>   
                                    <span>Instagram</span>
                                    <span>Twitter</span>
                                    <span>YouTube</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}