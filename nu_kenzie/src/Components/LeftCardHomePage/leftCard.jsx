import logo from '../../assets/img/Nu Kenzie.png'
import Botao from '../Button/button'
import Homepage from '../HomePage/Home'
import DashboardPage from '../Dashboard/Dashboard'
import App from '../../App'
import { useState } from 'react'



export default function LeftCard({resultClick}){
    const [click, setClick] = useState(true)
    return (
        <div className='w-3/12 flex flex-col items-start justify-center gap-y-14'>
            <img src={logo} alt="" />
            <h1 className='font-extrabold text-4xl leading-10 text-text'>Centralize o controle das suas finanças</h1>
            <p className='leading-6 font-normal text-text'>de forma rápida e segura</p>
            <Botao func={() => resultClick(false)} className={'text-text relative flex w-60 justify-center rounded-md border border-transparent bg-backgroundButton1 py-2 px-4 text-sm font-medium text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-700  hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'} value = {'Iniciar'}/>
        </div>
    )
}