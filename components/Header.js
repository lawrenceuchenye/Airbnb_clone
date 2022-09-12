import Image from "next/image"
import { SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon } from "@heroicons/react/solid"

const Header=()=>{
    return(
        <div className="sticky top-0 z-50 grid gird-cols-2  md:grid-cols-3 bg-white shadow-md p-5">
               <div className="relative flex w-[auto] items-center h-10 cursor-pointer">
                   <Image width={300} src="https://links.papareact.com/qd3" layout="fill" objectPosition="left" objectFit="contain"/>
                   </div>
                <div className="relative flex mt-4 md:mt-0 border-2 py-[5px] px-2 rounded-full shadow-sm">
                     <input type="text" placeholder="Start Your Search." className="pl-5 flex-grow outline-none"/>
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
           </div>
    );
}

export default Header;
