
import Image from "next/image";

export default function Founder() {
  return (
    <div className="px-4 pt-8 xl:px-16 mx-auto max-w-[1920px]">
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-8 lg:pl-20 gap-5 xl:gap-12">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-4">
            <span className="text-lg md:text-xl xl:text-3xl text-[#c39e86]">
              <strong>A Note From Our Founder</strong>
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xl md:text-2xl xl:text-4xl">
                <strong>At Happy Ho, we believe</strong>
              </span>
              <span className="text-xl md:text-2xl xl:text-4xl">
                <strong>emotional well-being is not a</strong>
              </span>
              <span className="text-xl md:text-2xl xl:text-4xl">
                <strong>destination — it's a daily practice.</strong>
              </span>
            </div>
            <p className="text-sm xl:text-lg text-[#c39e86]">
              <strong>
                In a world that moves quickly, many of us feel overwhelmed,
                disconnected, or unsure of how to navigate our inner lives.
              </strong>
            </p>
            <p className="text-sm xl:text-lg text-[#c39e86]">
              <strong>
                Happy Ho was created to provide a space where people can slow
                down, understand themselves better, and develop the tools needed
                for lasting emotional balance.
              </strong>
            </p>
            <p className="text-sm xl:text-lg text-[#c39e86]">
              <strong>
                Through coaching, meditation, and holistic guidance, our goal is
                to help individuals and organizations build clarity, resilience,
                and meaningful growth. We focus not on quick fixes, but on
                sustainable practices that help people live more consciously and
                intentionally.
              </strong>
            </p>
            <p className="text-sm xl:text-lg text-[#c39e86]">
              <strong>
                Happy Ho is not just a platform — it's a community built around
                the belief that when we understand ourselves better, we can
                create healthier relationships, better workplaces, and more
                fulfilling lives.
              </strong>
            </p>
            <p className="text-sm xl:text-lg text-[#c39e86]">
              <strong>Thank you for being part of this journey.</strong>
            </p>
          </div>
        </div>
        <div className="flex md:items-end md:justify-start">
          <div className="flex flex-col gap-2 md:gap-5">
              <Image
              src="/Screenshot 2026-02-14 075824.png"
              alt="img"
              width={400}
              height={100}
              className="w-100 md:w-100 lg:w-80 xl:w-150 xl:h-156 2xl:w-150 2xl:h-136 rounded-2xl"
            />
            <div className="flex flex-col text-center lg:text-right text-lg lg:text-xl xl:text-2xl text-[#c39e86]">
              <span>Jwalant Swaroop</span>
              <span>Founder, Happy Ho</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}