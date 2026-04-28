import Articles from "@/components/Articles";
import Discover from "@/components/Discover";
import Featured from "@/components/Feature";
import Footer from "@/components/Footer";
import FooterSmall from "@/components/FooterSmall";
import Header from "@/components/Header";
import Insights from "@/components/Insights";
import Published from "@/components/Published";




export default function Blog(){
    return(
        <>
         <div className="bg-[#E5DFD5] rounded-b-[60px] pb-10">
        <Header/>
        <Insights/>
        </div>
        <Featured/>
        <Articles/>
        {/* Step section */}
        <div className="relative z-0">
           <Published/>
        </div>
        {/* Overlapping Footer */}
        <div className="relative z-20 -mt-20 md:-mt-15 xl:-mt-30">
           <div className="hidden md:block">
                  <Footer/>
              </div>
                <div className="block md:hidden">
                  <FooterSmall/>
              </div>
        </div>
        </>
    );
}

