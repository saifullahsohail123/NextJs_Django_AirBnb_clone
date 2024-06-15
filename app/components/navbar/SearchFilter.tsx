
export const SearchFilter = () => {
  return (
    <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full ">

            <div className="flex flex-row items-center justify-between">

            <div className="hidden lg:flex">   


                <div className="w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                    <p className="text-xs font-semibold">Where</p>
                    <p className="text-sm">Wanted location</p>
                </div>

                <div className="h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                    <p className="text-xs font-semibold">Check in</p>
                    <p className="text-sm">Add dates</p>
                </div>

                <div className="h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                    <p className="text-xs font-semibold">Check out</p>
                    <p className="text-sm">Add dates</p>
                </div>


                <div className="h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                    <p className="text-xs font-semibold">Who</p>
                    <p className="text-sm">Add guests</p>
                </div>

                </div>

                <div className="p-2">
                    <div className="p-2 lg:p-3 bg-airbnb rounded-full hover:bg-airbnb-dark transition cursor-pointer text-white">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    </div>

                </div>

               
                 </div>
    </div>
  )
}
