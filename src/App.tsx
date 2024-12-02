


import CalculatorScreen from './components/CalculatorScreen'
import CalculatorButtons from './components/CalculatorButtons'
import { useState } from 'react'

import "./calcAgainOutput.css"

type ArrayValues = string | number


function App() {
  const [storedValues, setStoredValues] = useState<ArrayValues[]>([0])

  console.log(storedValues)

  return (
    <>
    <div className='bg-neutral-800 w-full min-h-svh borderr flex items-center justify-center'>
        <div className='bg-zinc-600 rounded-md  min-w-[100px] w-full max-w-[500px] h-[70svh] p-2 grid grid-rows-[0.9fr_2fr]'>

        <CalculatorScreen storedValues={storedValues}/>

        <CalculatorButtons 
        storedValues={storedValues} 
        setStoredValues={setStoredValues}
        />
          
        </div>
      </div>
    </>
  )
}

export default App
