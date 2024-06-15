import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchFilter } from "./SearchFilter";
import { UserNav } from "./UserNav";
import { AddPropertyButton } from "./AddPropertyButton";

export const Navbar = () => {
  return (
    <div className="w-full fixed  top-0 left-0 py-6 bg-white border-b z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/Airbnb.jpg"
              alt="Airbnb logo"
              width={180}
              height={38}
            />
          </Link>  
          
          <div className="  space-x-4">
            <SearchFilter/>
          </div>
          <div className="flex space-x-6 items-center">
            <AddPropertyButton /> 
            
            <UserNav />
          </div>

          
          </div>


       



      </div>
    </div>
  );
};
