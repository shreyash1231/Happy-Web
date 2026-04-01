
import Image from "next/image";

export default function Founder() {
  return (
    <div className="px-4 pt-8 xl:px-16 mx-auto max-w-[1920px]">
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-8 lg:pl-30 gap-5 xl:gap-12">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-4">
            <span className="text-lg md:text-xl xl:text-2xl text-[#c39e86]">
              <span>A Note From Our Founder</span>
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xl md:text-2xl xl:text-3xl">
                <span>At Happy Ho, we believe</span>
              </span>
              <span className="text-xl md:text-2xl xl:text-3xl">
                <span>emotional well-being is not a</span>
              </span>
              <span className="text-xl md:text-2xl xl:text-3xl">
                <span>destination — it's a daily practice.</span>
              </span>
            </div>
            <p className="text-sm xl:text-lg text-[#c39e86]">
              <span>
                In a world that moves quickly, many of us feel overwhelmed,
                disconnected, or unsure of how to navigate our inner lives.
              </span>
            </p>
            <p className="text-sm xl:text-lg text-[#c39e86]">
              <span>
                Happy Ho was created to provide a space where people can slow
                down, understand themselves better, and develop the tools needed
                for lasting emotional balance.
              </span>
            </p>
            <p className="text-sm xl:text-lg text-[#c39e86]">
              <span>
                Through coaching, meditation, and holistic guidance, our goal is
                to help individuals and organizations build clarity, resilience,
                and meaningful growth. We focus not on quick fixes, but on
                sustainable practices that help people live more consciously and
                intentionally.
              </span>
            </p>
            <p className="text-sm xl:text-lg text-[#c39e86]">
              <span>
                Happy Ho is not just a platform — it's a community built around
                the belief that when we understand ourselves better, we can
                create healthier relationships, better workplaces, and more
                fulfilling lives.
              </span>
            </p>
            <p className="text-sm xl:text-lg text-[#c39e86]">
              <span>Thank you for being part of this journey.</span>
            </p>
          </div>
        </div>
        <div className="flex justify-start">
  <div className="flex flex-col gap-2 md:gap-5">
    <Image
      src="/42.png"
      alt="img"
      width={400}
      height={300}
      className="rounded-2xl w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[650px] 2xl:max-w-[750px] xl:h-[600px]"
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