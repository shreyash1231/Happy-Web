export default function ResourcesLoading() {
  return (
    <div className="min-h-screen bg-[#E5DFD5] px-4 md:px-8 py-10">
      <div className="max-w-[1200px] mx-auto animate-pulse space-y-6">
        <div className="h-10 w-2/3 mx-auto rounded-full bg-[#d4cab9]" />
        <div className="h-12 w-full max-w-2xl mx-auto rounded-full bg-[#d4cab9]" />

        <div className="grid md:grid-cols-3 gap-6 pt-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="rounded-3xl overflow-hidden bg-[#d4cab9]">
              <div className="h-[220px] w-full bg-[#c8b99f]" />
              <div className="p-5 space-y-3">
                <div className="h-5 w-3/4 rounded bg-[#c8b99f]" />
                <div className="h-4 w-full rounded bg-[#c8b99f]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
