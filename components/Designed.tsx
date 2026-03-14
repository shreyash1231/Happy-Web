import { Card } from "./ui/card";
import Image from "next/image";
export default function Designed() {
  const stats = [
    { value: "1K+", label1: "Customers", label2: "Worldwide" },
    { value: "20+", label1: "Awards &", label2: "Honours" },
    { value: "521+", label1: "Workshops", label2: "\u00A0" },
    { value: "22+", label1: "Retreats", label2: "\u00A0" },
  ];

  return (
    <div className="mx-auto max-w-[1920px] pt-8 px-4 md:p-10 xl:p-16">
      <div className="flex flex-col gap-5 lg:gap-20 items-center justify-center">
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-12 xl:flex flex-wrap items-center justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col gap-4 lg:px-16 text-center">
                <strong className="text-4xl md:text-7xl text-[#544120]">
                  {stat.value}
                </strong>

                <div className="flex flex-col">
                  <span className="text-sm md:text-xl text-[#c39e86]">{stat.label1}</span>
                  <span className="text-sm md:text-xl text-[#c39e86]">{stat.label2}</span>
                </div>
              </div>

              {index < stats.length - 1 && (
                <div className="mx-4 hidden h-32 w-[2px] bg-yellow-400 xl:block" />
              )}
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="text-center">
          <strong className="text-xl md:text-5xl">
            Designed Around Your Needs
          </strong>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Card className="flex h-80 w-70 flex-col justify-between border border-yellow-400 bg-[#dcd8ce] px-6 pb-8">
            <div className="flex items-center justify-center text-lg font-semibold">
              <Image
               src="/3.png"
               alt="Consciousness"
               width={200}
               height={200}
               />
            </div>

            <div className="text-left text-3xl font-semibold">
              Consciousness <br /> Guidance
            </div>
          </Card>

          <Card className="flex h-80 w-70 flex-col justify-between border border-yellow-400 bg-[#7d7d83] px-6 pb-8">
            <div className="flex items-center justify-center text-lg font-semibold">
               <Image
               src="/4.png"
               alt="Meditation"
               width={200}
               height={200}
               />
            </div>

            <div className="text-left text-3xl font-semibold">
              Meditation <br /> Coaching
            </div>
          </Card>

          <Card className="flex h-80 w-70 flex-col justify-between border border-yellow-400 bg-[#3f5c4a] px-6 pb-8">
            <div className="flex items-center justify-center text-lg font-semibold">
               <Image
               src="/5.png"
               alt="Holistic"
               width={200}
               height={200}
               />
            </div>

            <div className="text-left text-3xl font-semibold">
              Holistic <br /> Healing
            </div>
          </Card>
        </div>
        <div className="text-center">
          <strong className="text-xl md:text-5xl">
            Therapy Formats
          </strong>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {/* Card 1 */}
          <Card className="bg-[#544120] rounded-3xl border-2 border-yellow-400 w-full max-w-sm lg:max-w-xl flex flex-col p-6 sm:p-8">
            <div className="flex justify-end">
              <Image
                src="/6.png"
                alt="Holistic"
                width={200}
                height={200}
                className="w-32 sm:w-40 lg:w-52 h-auto"
              />
            </div>
            <div className="flex flex-col gap-4 text-[#c39e86] mt-4">
              <strong className="text-2xl sm:text-3xl lg:text-4xl">
                For Individuals
              </strong>

              <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Personal coaching, meditation guidance, emotional wellness support,
                relationship clarity, life direction, healing work.
              </div>
            </div>
          </Card>
          {/* Card 2 */}
          <Card className="bg-transparent rounded-3xl border-2 border-[#544120] w-full max-w-sm lg:max-w-xl flex flex-col p-6 sm:p-8">
            
            <div className="flex justify-end">
              <Image
                src="/6.png"
                alt="Holistic"
                width={200}
                height={200}
                className="w-32 sm:w-40 lg:w-52 h-auto"
              />
            </div>
            <div className="flex flex-col gap-4 text-[#544120] mt-4">
              <strong className="text-2xl sm:text-3xl lg:text-4xl">
                For Individuals
              </strong>

              <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Personal coaching, meditation guidance, emotional wellness support,
                relationship clarity, life direction, healing work.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}