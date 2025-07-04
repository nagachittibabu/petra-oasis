import Image from "next/image";
import React from "react";
interface ClientCardprops{
   imageurl:string
}
const ClientCard:React.FC<ClientCardprops>=({imageurl})=>{
    return(
        <div>
            <Image src={imageurl} alt="pic" fill className="object-contain"/>
        </div>
    )
}
export default ClientCard