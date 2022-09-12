import Image from "next/image"

const SmallCard=({img_url,location,distance})=>{
    return(
        <div className="mr-4  flex space-x-4 hover:scale-105 duration-200 ease-out my-2 transition transform rounded-xl hover:bg-gray-100">
            <div className="relative h-16 w-16">
                 <Image className="rounded-lg" src={img_url} layout="fill"/>
               </div>
            <div>
               <h1 className="font-bold">{location}</h1>
               <p className="text-gray-400">{distance}</p>
              </div>
          </div>
    );
}


export default SmallCard;
