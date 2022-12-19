import HeaderNav from '../Header/header'
import FormNewValue from '../Form/form'
import Lista from '../List/ListTransictions'
import TotalMoney from '../TotalMoney/total'
import { useState } from 'react'

export default function DashboardPage({resultClick, dataFilter}){
    const [ data, setData ] = useState([])

    const resultadoSoma = data.reduce((a, b) => a + b.value, 0)

    return(
        <main>
            <HeaderNav resultClick={resultClick}/>
            <article className='max-w-[70vw] h-full m-auto mt-10 flex gap-16'>
                <div className='flex flex-col gap-3'>
                    <FormNewValue data={data} setData={setData}/>
                    <TotalMoney data={resultadoSoma}/>
                </div>
                <Lista data={data} dataFilter={dataFilter} setData={setData}/>
            </article>
        </main>    
    )
}