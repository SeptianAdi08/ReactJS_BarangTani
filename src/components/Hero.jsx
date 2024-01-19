import React from "react";

const Hero = () => {
    return(
        <div className=" max-w-[1640px] mx-auto p-4">

     <div className=" max-h-[500px] relative">
        {/*Overlay*/}
        <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center ">
            <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className=" text-green-500">Best</span></h1>
            <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span className=" text-green-500">Barang Tani</span> di Indonesia</h1>

        </div>
        <img className=" w-full max-h-[500px] object-cover" src="https://media.istockphoto.com/id/803236350/id/foto/petani-menyemprotkan-pestisida-di-sawah-hijau.jpg?s=612x612&w=0&k=20&c=kozDuqaeaMiZjC-st5mEAPdF71ykj9xMTY445zfiu0o=" alt="/"></img>

    </div>

        </div>
    )
}

export default Hero