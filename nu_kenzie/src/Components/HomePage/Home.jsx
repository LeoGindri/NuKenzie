import LeftCard from "../LeftCardHomePage/leftCard"
import RightCard from "../RightCardHomePage/rightCard"
import DashboardPage from "../Dashboard/Dashboard"
import { useState } from "react"

export default function Homepage({resultClick}){
    return (
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-full h-full bg-inputbackground 2xl flex gap-5 items-center justify-center'>
            <LeftCard resultClick={resultClick}/>
            <RightCard/>
          </div>
        </div>
    )
}