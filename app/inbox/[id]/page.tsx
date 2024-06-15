'use client';

import CustomButton from "@/app/components/forms/CustomButton";

const ConversationPage = () => {
    return (
        <>
        <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
          <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
            <p className="font-bold text-gray-500">John Doe</p>

            <p>Lorum ipsum is somewhat dynamic to the thresholg of the chunk</p>
          </div>

          <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
            <p className="font-bold text-gray-500">Code with Stein</p>

            <p>Lorum ipsum is somewhat dynamic to the thresholg of the chunk</p>
          </div>

      </div>
      
      <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4">
            <input type="text" placeholder="Type your Message"
            className="w-full p-2 bg-gray-200 rounded-xl" />

            <CustomButton  label='Send' 
            className="w-[100px]" onClick={() => console.log("CLICKED")} />
      </div>
      </>

    )
  }
  
  
  export default ConversationPage;