import React from "react";


const HeadlineCards = () => {
    return(
        <div className=" max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/*Slide Card */}

            <div className=" rounded-xl relative ">
                {/*Overlay*/}
                <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white" >
                   <p className=" font-bold text-2xl px-2 pt-4">Pupuk ZA Petro</p>
                   <p className=" px-2">SNI : 02-1760-2005</p>
                   <button className=" border-white bg-green-500 text-white hover:scale-105 duration-300 mx-2 absolute bottom-4">Order Now</button> 

                </div>
                <img className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
                src="https://storage.googleapis.com/pkg-portal-bucket/images/product/_productThumb/3D-ZA.png" alt="/"></img>
            </div>

            <div className=" rounded-xl relative ">
                {/*Overlay*/}
                <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white" >
                   <p className=" font-bold text-2xl px-2 pt-4">Benih Padi Memberano</p>
                   <p className=" px-2">RP50.000</p>
                   <button className=" border-white bg-green-500 text-white hover:scale-105 duration-300 mx-2 absolute bottom-4">Order Now</button> 

                </div>
                <img className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src="https://pbpp.pertanian.jatimprov.go.id/wp-content/uploads/2021/01/andhika-y-wiguna-VsNWi5gNIbE-un-300x300.jpg" alt="/"></img>
            </div>

            <div className=" rounded-xl relative ">
                {/*Overlay*/}
                <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white" >
                   <p className=" font-bold text-2xl px-2 pt-4">Alat Pertanian Modern </p>
                   <p className=" px-2">Tersedia 8/26</p>
                   <button className=" border-white bg-green-500 text-white hover:scale-105 duration-300 mx-2 absolute bottom-4">Order Now</button> 

                </div>
                <img className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src="http://agro.umsrappang.ac.id/file/blog/field-wheat-asphalt-food-harvest-crop-1105573-pxhere_com_.jpg" alt="/"></img>
            </div>
        </div>
    )
}

export default HeadlineCards