import Image from "next/image"


export const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image src="/Beach.jpg" alt="Icons" width={40} height={40}></Image>
        <span className="text-xs">Beach</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image src="/Islands.jpg" alt="Islands" width={40} height={40}></Image>
        <span className="text-xs">Islands</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image src="/Caves.jpg" alt="Caves" width={40} height={40}></Image>
        <span className="text-xs">Caves</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image src="/TinyHouse.jpg" alt="Tiny Homes" width={40} height={40}></Image>
        <span className="text-xs">Tiny Homes</span>
        </div>


        </div>
  )
}
