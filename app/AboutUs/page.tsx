import Founder from "@/components/Founder";
import Growth from "@/components/Growth";
import Happy from "@/components/Happy";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Step from "@/components/Step";
import Guides from "@/components/Guides";

export default function AboutUs(){
    return(
        <>
        <Header/>
        <Founder/>
        <Growth/>
        <Happy/>
        <Guides/>
        {/* <Step/> */}
        <Footer/>
        </>
    );
}