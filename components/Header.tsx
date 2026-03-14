import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="pt-12 px-4 xl:p-16 z-50 mx-auto max-w-[1920px]">
        <div className="bg-[#dcd8ce] p-2 lg:p-4 rounded-full flex md:grid md:grid-cols-4">
            <div>
              <Button className="bg-[#3f5c4a] rounded-4xl text-base px-4 lg:px-8 py-5">
                Logo
              </Button>
            </div>
            <div className="col-span-2 md:flex md:gap-4 lg:gap-10 items-center justify-center hidden md:text-sm text-2xl">
              <div>About US</div>
              <div>Programs</div>
              <div>Corporate</div>
              <div>Blog</div>
            </div>
           <div className="ml-auto">
              <Button className="bg-[#3f5c4a] rounded-4xl text-base px-4 lg:px-8 py-5">
                Get Started
              </Button>
            </div>
        </div>
    </div>
  );
}