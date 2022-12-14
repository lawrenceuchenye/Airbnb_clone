import Head from 'next/head'
import Image from 'next/image'

import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"

import data from "../utils/data"

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <section className="mx-auto px-8 sm:px-16">
         <main className="pt-6">
             <h1 className="text-4xl font-semibold pb-5">Explore Nearby</h1>
             <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
              {data.map((data_)=>(
               <SmallCard
                  key={data_.img}
                 location={data_.location}
                distance={data_.distance}
                img_url={data_.img}
              />
              ))}
              </div>
            </main>
           <main>
               <h1 className="text-4xl font-semibold py-8">Live Anywhere</h1> 
             <div className="flex space-x-3 overflow-x-scroll scrollbar-hide">
               {data.map((data_)=>(
                <MediumCard
                   key={data_.img}
                  title={data_.location}
                 img_url={data_.img}
               />
               ))}
               </div>
             </main>
             <LargeCard 
                img="https://links.papareact.com/4cj"
                title="The Great Outdoors"
                desc="Wishlist curated by Airbnb"
                btnTxt="Get Inspired" 
              />
        </section>
      <Footer />
   </div>
  );
}

/*
export const getStaticProps=async ()=>{
   const exploreData=await fetch("https://links.papareact.com/zp1").then((res)=>res.json());

   console.log(exploreData);
}*/
