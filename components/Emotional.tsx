import { Button } from "./ui/button";

export default function Emotional() {
  return (
    <div className="mx-auto max-w-[1920px] p-8">
      <div className="flex flex-col items-center gap-4 text-center">
        
        <strong className="text-xl md:text-5xl text-[#544120]">
          You don’t have to navigate this alone.
        </strong>

        <strong className="text-xl md:text-4xl text-[#c39e86]">
          Start building emotional resilience today.
        </strong>

        <Button className="mt-4 w-50 lg:w-[220px] bg-[#3f5c4a] hover:bg-[#344c3d] rounded-4xl py-4 lg:py-6">
          Book Discovery Session
        </Button>

      </div>
    </div>
  );
}