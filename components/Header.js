import Image from "next/image"
import { SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon } from "@heroicons/react/solid"
import { useState } from "react"

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file7

import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router"


const Header=()=>{
    const [searchInput,setSearchInput]=useState("");
    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());
    const [guestNumber,setGuestNumber]=useState(1);

    const handleSelect=(ranges)=>{
         setStartDate(ranges.selection.startDate);
         setEndDate(ranges.selection.endDate);
    }
     
     const router=useRouter();

    const selectedRange={
        startDate:startDate,
        endDate:endDate,
        key:"selection"
    }

    return(
        <div className="sticky top-0 z-50 grid gird-cols-2  md:grid-cols-3 bg-white shadow-md p-5">
               <div className="relative flex w-[auto] items-center h-10 cursor-pointer">
                   <Image width={300} src="https://links.papareact.com/qd3" layout="fill" objectPosition="left" objectFit="contain"/>
                   </div>
                <div className="relative flex mt-4 md:mt-0 border-2 py-[5px] px-2 rounded-full shadow-sm">
                     <input defaultValue={searchInput} onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder="Start Your Search." className="pl-5 flex-grow outline-none"/>
                     <SearchIcon className="h-10 bg-red-400 p-2 rounded-full text-white" /> 
                   </div>
                <div className="hidden md:flex items-center space-x-4 justify-end text-gray-500">
                    <h2 className="font-bold">Become a hotel</h2>
                    <GlobeAltIcon className="h-8"/>
                    <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
                       <MenuIcon className="h-6" />
                       <UserCircleIcon className="h-6"/>
                      </div>
                  </div>
              {(searchInput != "") && (
                <div className="flex flex-col col-span-3 mx-auto">
                   <DateRangePicker
                    ranges={[selectedRange]}
                    minDate={new Date()}
                    orientation={"horizontal"}
                    rangeColors={["#f87171"]}
                    onChange={handleSelect}
                  />
                  <div className="flex border-b-2 mb-2">
                     <h2 className="flex-grow text-2xl font-semibold">Number Of Guests</h2>
                     <UserIcon className="h-8 w-7"/>
                     <input type="number" className="w-12 pl-4 outline-none text-red-400" defaultValue={guestNumber} onChange={(e)=>setGuestNumber(e.target.value)} min={1}/>
                   </div>
                   <div className="flex">
                       <button className="text-gray-500 flex-grow" onClick={()=>setSearchInput("")}>Cancel</button>
                       <button className="text-red-400 flex-grow" onClick={()=>router.push("search/")}>Search</button>
                     </div>

                  </div>
              )}
           </div>
    );
}

export default Header;
