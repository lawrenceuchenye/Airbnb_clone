import Image from "next/image"

const LargeCard=({img,title,desc,btnTxt})=>{
    return(
        <div className="relative py-16">
             <div className="relative min-w-[300px] h-96">
                  <Image src={img} layout="fill" objectFit="cover" className="rounded"/>
                 </div>
              <div className="absolute top-32 left-12">
                  <h1 className="text-4xl mb-3 w-64 font-bold">{title}</h1>
                   <p>{desc}</p>
                    <button className="bg-gray-900 text-sm text-white px-4 py-2 rounded-lg mt-6">{btnTxt}</button>
                </div>
           </div>
    );
}

export default LargeCard;
