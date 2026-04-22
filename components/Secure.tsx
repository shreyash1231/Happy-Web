export default function Secure() {
  return (
    <div className="p-16 mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center gap-4 text-xl">
                <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                1
                </div>
                <span>Service</span>

                <div className="w-10 h-[2px] bg-[#6b5b3e]" />

                <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                2
                </div>
                <span>Guide</span>

                <div className="w-10 h-[2px] bg-[#6b5b3e]" />

                <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                3
                </div>
                <span>Details</span>

                <div className="w-10 h-[2px] bg-[#6b5b3e]" />

                <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                4
                </div>
                <span>Payment</span>
            </div>
            <div className="flex flex-col text-2xl mt-20">
                <span>Step 1: Secure Your Spot</span>
            </div>
        </div>
    </div>
  );
}