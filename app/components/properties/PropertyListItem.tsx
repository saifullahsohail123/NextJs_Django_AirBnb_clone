import Image from "next/image"

export const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
        {/*  The relative class actaully sizes the images to aspect ratio, without it the Image covers the whole screen */}
        <div className="relative overflow-hidden aspect-square rounded-xl">
            <Image fill src='/beach_1.jpg' alt="Beach House"
            sizes="(max-width:768px) 768px, (max-width:1200px): 768px, 768px  "
           className="hover:scale-110 object-cover transition h-full w-full" 
            >


            </Image>
        </div>
        
        <div className="mt-2">
            <p className="text-lg font-bold"> Property Name</p>
        </div>

        <div className="mt-2">
            <p className="text-sm text-gray-700"><strong>$200</strong> per night</p>
        </div>


    </div>
    



)
}
