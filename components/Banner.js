import Image from "next/image"

const Banner=()=>{
    return(
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]  w-auto">
            <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" objectPosition="center"/>
             <div className="absolute top-1/2 w-full text-center">
                <p className="text-1xl font-bold">Not sure where to go?,Perfect.</p>
                <button className="text-purple-500 font-bold bg-white px-12 py-4 shadow-md rounded-full my-5 hover:shadow-xl active:scale-90 duration-150"> I'm flexible </button>
                </div>
           </div>
    );

}

export default Banner;
