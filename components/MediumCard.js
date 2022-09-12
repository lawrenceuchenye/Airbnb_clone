import Image from "next/image"

const MediumCard=({img_url,title})=>{
    return(
        <div>
           <div className="relative transform transition duration-300 hover:scale-105 ease-out h-80 w-80">
              <Image className="rounded-lg" src={img_url} layout="fill" />
             </div>
            <div>
               <p className="font-bold text-2xl">{title}</p>
              </div>
           </div>
    );
}


export default MediumCard;
