export default function ArticleLoading() {
  return (
    <div className="min-h-screen bg-[#E5DFD5] px-4 md:px-8 py-10">
      <div className="max-w-4xl mx-auto animate-pulse space-y-6">
        <div className="h-6 w-36 rounded bg-[#d4cab9]" />
        <div className="h-10 w-3/4 rounded bg-[#d4cab9]" />
        <div className="h-[280px] w-full rounded-3xl bg-[#d4cab9]" />
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="h-5 w-full rounded bg-[#d4cab9]" />
          ))}
        </div>
      </div>
    </div>
  );
}
