import Clarity from "@/components/Clarity";
import Designed from "@/components/Designed";
import Emotional from "@/components/Emotional";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Practice from "@/components/Practice";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <Practice/>
    <Designed/>
    <Clarity/>
    <FAQ/>
    <Emotional/>
    <Footer/>
    </>
  );
}
