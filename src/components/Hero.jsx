import React from "react";

const Hero = () => {
    return(
        <div className=" max-w-[1640px] mx-auto p-4">

     <div className=" max-h-[500px] relative">
        {/*Overlay*/}
        <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center ">
            <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className=" text-orange-600">Best</span></h1>
            <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span className=" text-orange-600">Pasta</span>Delivered</h1>

        </div>
        <img className=" w-full max-h-[500px] object-cover" src="https://images.unsplash.com/photo-1671754088986-4c4905e405ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwZXRhbmklMjBpbmRvbmVzaWF8ZW58MHx8MHx8fDA%3D" alt="/"></img>

    </div>

        </div>
    )
}

export default Hero