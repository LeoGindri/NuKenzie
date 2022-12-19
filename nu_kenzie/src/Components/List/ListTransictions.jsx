import Botao from "../Button/button"
import { useState } from "react"
import Card from "../Card/CardTransition"

export default function Lista({data, setData}){

    const [filter, setFilter] = useState([])
    const [bool, setbool] = useState(true)
    const handleValue = (event) =>{
        const secao = event.target.value
        {
            setFilter(() => data.filter(obj => obj.type === secao ))
            setbool(false)
        }
    }
    const mostrarTodos = () =>{
        {
            setbool(true)
        }
    }

    return(
        <section className="w-[50vw] ">
            <div className="flex justify-between items-center">
                <p className="text-lg leading-8  text-bold ">Resumo Financeiro</p>
                <div className="flex gap-5">
                    <Botao func={mostrarTodos} valueBtn={'todos'} onChange={handleValue} className={'h-10 w-16 bg-backgroundButton1  rounded-lg text-center text-sm text-hovercard  hover:-translate-y-1 transition delay-100 ease-in-out duration-100'} value={'Todos'}/>
                    <Botao func={handleValue} valueBtn={'entrada'} onChange={handleValue} className={'h-10 w-17 bg-placeholder  rounded-lg p-2 text-center text-sm text-hovercard    hover:-translate-y-1 transition delay-100 ease-in-out duration-100'} value={'Entradas'}/>
                    <Botao func={handleValue} valueBtn={'despesa'} onChange={handleValue} className={'h-10 w-17 bg-placeholder  rounded-lg p-2 text-center text-sm text-hovercard    hover:-translate-y-1 ease-in-out duration-75 '} value={'Despesas'}/>
                </div>
            </div>
            <div className="bool mt-10 flex flex-col gap-5  max-h-[500px] overflow-y-auto pr-2">
                {
                    (data.length === 0)&&(
                        <>
                            <h1 className="text-2xl font-bold">Você ainda não possui nenhum lançamento</h1>
                            <div id="lançamentos" className="mt-4 flex flex-col gap-4">
                                    {/* <Card/> */}
                                <div className="bg-[#F8F9FA] w-full h-[84px] rounded-lg flex flex-col justify-center gap-4 items-start pl-5 ">
                                    <div className="w-[80%] h-4 bg-borderColor1"></div>
                                    <div className="w-[30%] h-4 bg-borderColor1"></div>
                                </div>
                                <div className="bg-[#F8F9FA] w-full h-[84px] rounded-lg flex flex-col justify-center gap-4 items-start pl-5 ">
                                    <div className="w-[80%] h-4 bg-borderColor1"></div>
                                    <div className="w-[30%] h-4 bg-borderColor1"></div>
                                </div>
                                <div className="bg-[#F8F9FA] w-full h-[84px] rounded-lg flex flex-col justify-center gap-4 items-start pl-5 ">
                                    <div className="w-[80%] h-4 bg-borderColor1"></div>
                                    <div className="w-[30%] h-4 bg-borderColor1"></div>
                                </div>
                                <div className="bg-[#F8F9FA] w-full h-[84px] rounded-lg flex flex-col justify-center gap-4 items-start pl-5 ">
                                    <div className="w-[80%] h-4 bg-borderColor1"></div>
                                    <div className="w-[30%] h-4 bg-borderColor1"></div>
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    bool?
                    data.map((obj, index) => (
                        <Card data={obj} fulldata={data} key={index} setData={setData} idCart={obj.id}/>
                    )):
                    filter.map((obj, index) => (
                        <Card data={obj} fulldata={data} key={index} setData={setData} idCart={obj.id}/>
                    )) 
                }
            </div>
        </section>
    )
}