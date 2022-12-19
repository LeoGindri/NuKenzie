import imgLixeira from '../../assets/img/trash.png'

export default function Card({data, fulldata, setData, idCart}){
    
    const deletar = (idCart) => {
        const listaFiltrada = fulldata.filter((obj) => obj.id !== idCart )
        setData(listaFiltrada)
    }

    return(
        <section className={`px-5 py-3 h-19 flex flex-col gap-4 bg-[#F8F9FA] rounded-lg border-l-4 border-white ${data.type !== 'entrada' ? 'border-deletecolor' : ''}`}>
            <div className='flex justify-between  '>
                <h2 className='font-extrabold text-font1'>{data.description}</h2>
                <div className='h-full my-auto flex gap-7'>
                    <span className={`m-auto text-xs font-normal text-[#212529] ${data.type !== 'entrada' ? 'text-deletecolor' : ''}`}>${data.value}</span>
                    <button onClick={() => deletar(idCart)}  className='bg-placeholder h-6 w-6 rounded-md hover:transition delay-150 duration-300 ease-in-out'> <img className='m-auto object-none' src={imgLixeira} alt="" /></button>
                </div>
            </div>
            <span className='text-base text-backgroundcolor font-bold'>{data.type}</span>
        </section>
    )
}