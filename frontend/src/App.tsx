import { useState } from "react"
import { Button } from "./components/ui/button"
import IsUpload from "./pages/IsUpload"
import ManuallForm from "./pages/ManuallForm"

function App() {
  const [isUploadTab, setIsUploadTab] = useState(true)
  return (

    <>
    <div className='h-screen bg-gray-200 py-4 px-4'>
      <div className='upper py-2 flex flex-col items-center '>
        <h1 className='text-5xl p-4 rounded-lg bg-gradient-to-r from-orange-200 to-blue-300 tracking-wider font-semibold '>Xpenza <span className='text-lg text-orange-900'>Expense Tracker App</span></h1>
        <img src="./hero image.jpeg" alt="" className='w-4/5 rounded-xl object-cover '/>
      </div>
      <div className='lower mt-12 flex justify-center pb-16 gap-2'>
          <Button size={'lg'} variant={isUploadTab ? 'default' : 'secondary'}  onClick={() => setIsUploadTab(true)}>Upload Your Bill </Button>
          <Button size={'lg'} variant={isUploadTab ? 'secondary' : 'default'} onClick={() => setIsUploadTab(false)}>Enter Manually</Button>
      </div>
      {
        isUploadTab ? (
          <>
          <IsUpload />
          </>
        ) : (
          <>
          <ManuallForm />
          </>
        )
      }
    </div>
     

    </>
  )
}

export default App
