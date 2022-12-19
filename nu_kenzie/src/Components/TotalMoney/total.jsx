import { useState } from "react"

export default function TotalMoney({data}){  

    return(
        <div className="w-66 border-solid border-[1px] border-borderColor1 rounded-lg p-10 flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg">Valor Total:</h2>
                <h2 className="font-black text-lg text-backgroundButton1">${data}</h2>
            </div>
            <span className="font-normal text-sm text-texttocansado" >O valor se refere ao saldo</span>
        </div>
    )
}