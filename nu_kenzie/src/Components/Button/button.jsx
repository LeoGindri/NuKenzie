import App from "../../App" 
import FormNewValue from "../Form/form"
import { useState } from "react"


export default function Botao({func, value, className, idCard, valueBtn}){
    return(
        <div >
            <button type="submit" id={idCard} className={className} value={valueBtn} onClick={func}>{value}</button>
        </div>
    )
}