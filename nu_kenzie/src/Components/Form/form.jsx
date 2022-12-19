import Botao from "../Button/button";


import { useState } from "react";

export default function FormNewValue({data, setData}){

    const [inputDescription, setInputDescription] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [selectType, setSelectType] = useState('entrada')
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputValue !== '' && inputDescription !== '' && inputValue > 0 ){
            setData([...data, {
                id: crypto.randomUUID(),
                description: inputDescription,
                type: selectType,
                value:selectType === 'entrada' ? Number(inputValue) : -Number(inputValue)
            }])
        }
    }
    
    return(
        <form className="border-solid border-[1px] border-borderColor1 rounded-lg p-10 w-96 h-max" onSubmit={handleSubmit} >
            <div className="flex flex-col mb-4">
                <p className="font-normal text-base">Descrição</p>
                <input className="h-12  py-4 px-4 border-solid border-2 rounded-lg bg-[#F8F9FA] border-[#F8F9FA] text-base focus:shadow-none  focus:outline-[0px]" required onChange={(event)=> setInputDescription(event.target.value)} type="text" placeholder="Digite aqui sua descrição" />
                <span className="text-xs font-normal text-[#868E96]">Ex: Compra de roupas</span>
            </div>
            <ul className="listToFill flex gap-4 ">
                <li>
                    <p className="font-normal text-sm">Valor</p>
                     <input className="inputValue bg-[#F8F9FA] selectType py-4 px-2 border-[solid 1px #F8F9FA] rounded-lg h-[52.8px] w-[120px] " required onChange={(event)=> setInputValue(event.target.value)} type="number" placeholder="1" />
                </li>
                <li>
                    <p className="font-normal text-sm">Tipo de valor</p>
                    <select className="selectType py-4 px-2 bg-[#F8F9FA] border-[2px solid #F8F9FA] rounded-lg h-[52.8px] w-[120px] text-[#53585d] " required onChange={(event)=> setSelectType(event.target.value)} name="choise" id="">
                        <option className="w-max bg-[#F8F9FA]" value="entrada">Entrada</option>
                        <option className="w-max" value="despesa">Despesa</option>
                    </select>
                </li>
            </ul>
            <Botao func={handleSubmit} className={'m-auto relative flex w-80 justify-center my-5 rounded-md border-transparent bg-backgroundButton1 py-2 px-4 text-sm font-medium hover:text-buttontext delay-100 duration-100 transition '} value={'Inserir valor'}/>
        </form>
    )
}