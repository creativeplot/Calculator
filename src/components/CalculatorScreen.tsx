
import { useState, useEffect } from "react"


type ArrayValues = string | number

type ScreenProps = {
  storedValues: ArrayValues[]
}

const CalculatorScreen = (
  {storedValues}: ScreenProps) => {

    console.log(storedValues)
  

  return (
    <>
    <div className='bg-black rounded-t-md min-w-[100px] w-full max-w-[500px] flex flex-wrap text-white text-5xl items-end justify-end pr-2 pb-1 content-end'>
      {storedValues.map((number, index) => {
        return (
          <p key={index}>{number}</p>
        )
      })}
    </div>
    </>
  )
}

export default CalculatorScreen