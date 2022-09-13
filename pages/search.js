import Header from "../components/Header"
import Footer from "../components/Footer"

import { useRouter } from "next/router"
import { format } from "date-fns"

const search=()=>{
    const router=useRouter();
    console.log(router.query);

    const { location,startDate,endDate,noOfGuest }=router.query;
    
    const formattedStartDate=format(new Date(startDate),"dd MMMM yy");
    const formattedEndDate=format(new Date(endDate),"dd MMMM yy");

    const ranges=`${formattedStartDate} - ${formattedEndDate}`;

    return(
        <div>
           <Header />
           <main>
               <section className="pt-14 px-6">
                  <p className="text-xs">300+ Stays - {ranges} for {noOfGuest} number of guests</p>
                  <h1 className="text-3xl font-semibold mt-6 mb-5">Stays in {location}</h1>
                  <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                      <p className="px-4 py-2 hover:shadow-lg rounded-full border active:scale-95 active:bg-gray-100 transition transform duration-150 ease-out">Calculate Flexibility</p>
                      <p className="px-4 py-2 hover:shadow-lg rounded-full border active:scale-95 active:bg-gray-100 transition transform duration-150 ease-out">Type of Place</p>
                      <p className="px-4 py-2 hover:shadow-lg rounded-full border active:scale-95     active:bg-gray-100 transition transform duration-150 ease-out">Price</p>
                      <p className="px-4 py-2 hover:shadow-lg rounded-full border active:scale-95     active:bg-gray-100 transition transform duration-150 ease-out">Rooms and Beds</p>
                      <p className="px-4 py-2 hover:shadow-lg rounded-full border active:scale-95     active:bg-gray-100 transition transform duration-150 ease-out">More filter</p>
                    </div>
                </section>
             </main>
           <Footer />
           </div>
    );
}


export default search;
