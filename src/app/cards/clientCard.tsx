import React from "react";
interface ClientCardprops{
   imageurl:string
}
const ClientCard:React.FC<ClientCardprops>=({imageurl})=>{
    return(
        <div>
            <img src={imageurl} alt="pic" />
        </div>
    )
}
export default ClientCard