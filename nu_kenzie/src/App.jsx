import { useState } from 'react'
import DashboardPage from './Components/Dashboard/Dashboard'
import Homepage from './Components/HomePage/Home' 

function App({teste}) {
  const [click, setClick] = useState(true)
  return (
    <div className="App h-screen  max-w-full ">
      {click ? <Homepage resultClick={setClick}/> : <DashboardPage resultClick={setClick}/>}  
    </div>
  )
}

export default App
