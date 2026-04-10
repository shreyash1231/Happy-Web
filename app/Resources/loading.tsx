export default function ResourcesLoading() {
  return (
    <div className="min-h-screen bg-[#E5DFD5] flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 rounded-full border-4 border-[#3f5c4a]/30 border-t-[#3f5c4a] animate-spin" />
        <p className="text-[#544120] text-sm md:text-base">Loading articles...</p>
      </div>
    </div>
  );
}

