import { Card } from "./ui/card";
import Image from "next/image";

export default function Explore() {
  return (
    <div className="px-4 pt-8 xl:p-16">
      <div className="flex flex-col gap-10 xl:gap-20 mx-auto max-w-[1920px]">
        <span className="text-center text-3xl xl:text-6xl">
          <strong>Explore Our Programs</strong>
        </span>

<div className="grid grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-12 max-w-[780px] mx-auto w-full">
          <Card className="w-full md:w-60 md:h-50 rounded-2xl border-1 p-4 bg-[#3d3020] text-white">
            <span className="text-2xl text-center">Executive <br /> Coaching</span>
            <span className="text-center">
              Guidance for leaders and professionals to develop clarity,
              emotional intelligence, and strategic decision-making.
            </span>
          </Card>

          <Card className="w-full md:w-60 md:h-50 rounded-2xl border-1 border-[#3d3020] text-center items-center bg-[#f3efe8]">
            <Image src="/3.png" alt="Meditation" width={100} height={100} />
            <span className="text-2xl">Happiness <br /> Coaching</span>
          </Card>

          <Card className="w-full md:w-60 md:h-50 rounded-2xl border-1 border-[#3d3020] text-center items-center bg-[#f3efe8]">
            <Image src="/3.png" alt="Meditation" width={100} height={100} />
            <span className="text-2xl">Happiness <br /> Coaching</span>
          </Card>

          <Card className="w-full md:w-60 md:h-50 rounded-2xl border-1 border-[#3d3020] text-center items-center bg-[#f3efe8]">
            <Image src="/3.png" alt="Meditation" width={100} height={100} />
            <span className="text-2xl">Happiness <br /> Coaching</span>
          </Card>

          <Card className="w-full md:w-60 md:h-50 rounded-2xl border-1 border-[#3d3020] text-center items-center bg-[#f3efe8]">
            <Image src="/3.png" alt="Meditation" width={100} height={100} />
            <span className="text-2xl">Happiness <br /> Coaching</span>
          </Card>

          <Card className="w-full md:w-60 md:h-50 rounded-2xl border-1 border-[#3d3020] text-center items-center bg-[#f3efe8]">
            <Image src="/3.png" alt="Meditation" width={100} height={100} />
            <span className="text-2xl">Happiness <br /> Coaching</span>
          </Card>

          <Card className="w-full md:w-60 md:h-50 rounded-2xl border-1 border-[#3d3020] text-center items-center bg-[#f3efe8]">
            <Image src="/3.png" alt="Meditation" width={100} height={100} />
            <span className="text-2xl">Happiness <br /> Coaching</span>
          </Card>

          <Card className="w-full md:w-60 md:h-50 rounded-2xl border-1 border-[#3d3020] text-center items-center bg-[#f3efe8]">
            <Image src="/3.png" alt="Meditation" width={100} height={100} />
            <span className="text-2xl">Happiness <br /> Coaching</span>
          </Card>

          <Card className="w-full md:w-60 md:h-50 rounded-2xl border-1 border-[#3d3020] text-center items-center bg-[#f3efe8]">
            <Image src="/3.png" alt="Meditation" width={100} height={100} />
            <span className="text-2xl">Happiness <br /> Coaching</span>
          </Card>
        </div>
      </div>
    </div>
  );
}