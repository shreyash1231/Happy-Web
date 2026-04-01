import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <div className="pt-12 px-4 xl:p-16 z-50 mx-auto max-w-[1920px]">
        <div className="bg-[#dcd8ce] p-2 rounded-full flex md:grid md:grid-cols-4">
            <div>
              <Image
              src="/footerImage.png"
              alt="logo"
              width={50}
              height={50}
              />
              {/* <Button className="bg-[#3f5c4a] rounded-4xl text-base px-4 lg:px-8 py-5">
                Logo
              </Button> */}
            </div>
            <div className="col-span-2 md:flex md:gap-4 lg:gap-10 items-center justify-center hidden md:text-sm text-2xl">
              <div className="cursor-pointer"><Link href={"/AboutUs"}>About US</Link></div>
              <div className="cursor-pointer"><Link href={"/Programs"}>Programs</Link></div>
              <div>Corporate</div>
              <div>Blog</div>
            </div>
           <div className="ml-auto">
              <Button className="bg-[#3f5c4a] hover:bg-[#162d22] cursor-pointer rounded-4xl text-base px-4 lg:px-8 py-6">
                Get Started
              </Button>
            </div>
        </div>
    </div>
  );
}