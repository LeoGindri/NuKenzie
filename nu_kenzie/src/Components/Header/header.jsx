import Botao from '../Button/button'
import logo  from '../../assets/img/Nu Kenzie2.png'

export default function HeaderNav({resultClick}){
    return(

        <header className='h-20 w-full bg-backgroundHeader flex items-center justify-center shadow-3xl'>
            <div className='h-full w-70vw flex items-center justify-between'>
                <img src={logo}  alt="" />
                <Botao func={() => resultClick(true)} className={'w-16 h-10 bg-backgroundButton2 border-solid border-[#E9ECEF] rounded-lg p-3 font-semibold text-[14px] leading-5 hover:scale-105 transition delay-150 duration-500 ease-in-out hover:bg-[#77797b] hover:text-text  '} value = {'Inicio'}/>
            </div>
        </header>
    )
}