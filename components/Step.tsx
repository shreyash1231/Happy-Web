import Footer from "./Footer";

export default function Step() {
  return (
    <div className="relative min-h-screen">
      
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/2.png"
          alt="background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* your content here */}
      </div>
    </div>
  );
}