import { useState } from "react"
import { Button } from "./components/ui/button"
import IsUpload from "./pages/IsUpload"
import ManuallForm from "./pages/ManuallForm"

function App() {
  const [isUploadTab, setIsUploadTab] = useState(true)
  return (

    <>
    <div className='h-[200vh] bg-gray-200 py-4 px-4'>
      <div className='upper py-2 flex flex-col items-center gap-4'>
        <h1 className='text-5xl p-4 rounded-lg bg-gradient-to-r from-orange-200 to-blue-300 tracking-wider font-semibold '>Xpenza <span className='text-lg text-orange-900'>Expense Tracker App</span></h1>
        <img src="./hero image.jpeg" alt="" className='w-1/2 md:w-2/5  lg:w-2/5 rounded-xl object-cover '/>
      </div>
      <div className='lower mt-12 flex justify-center pb-16 gap-2'>
          <Button size={'lg'} variant={isUploadTab ? 'default' : 'secondary'}  onClick={() => setIsUploadTab(true)}>Upload Your Bill </Button>
          <Button size={'lg'} variant={isUploadTab ? 'secondary' : 'default'} onClick={() => setIsUploadTab(false)}>Enter Manually</Button>
      </div>
      {
        isUploadTab ? (
          <>
           <div className="flex justify-center ">
            <div className="w-1/2">
              <IsUpload />
            </div>

          </div>
          </>
        ) : (
          <>
        <div className="flex justify-center ">
        <div className="w-1/2">
          <ManuallForm />
          </div>
          </div>
          </>
        )
      }
    </div>
     

    </>
  )
}

export default App
