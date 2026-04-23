import BookingDetailsForm from "@/components/BookingDetailsForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Journery from "@/components/Journey";
import Paymentpay from "@/components/paymentpay";
import Secure from "@/components/Secure";


export default function Payment(){
    return(
        <>
        <Journery/>
        <Secure/>
        <BookingDetailsForm/>
        <Footer/>
        </> 
    );
}


