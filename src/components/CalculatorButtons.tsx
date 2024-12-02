
import { useRef } from "react"

import PlusSign from "./PlusSign"
import EqualSIgn from "./EqualSIgn"
import ResetButton from "./ResetButton"
import DeleteButton from "./DeleteButton"
import MinusSign from "./MinusSign"
import TimesSign from "./TimesSign"
import DivisionSign from "./DivisionSign"
import PercentageSign from "./PercentageSign"
import DotSign from "./DotSign"

type ArrayValues = string | number

type ButtonsProps = {
  storedValues: ArrayValues[]
  setStoredValues: React.Dispatch<React.SetStateAction<ArrayValues[]>>
}


const CalculatorButtons = (
  {storedValues, setStoredValues}: ButtonsProps) => {

    function getButtonValue (value: string) {

      const stringValue = value
      const newNumberValue = parseInt(stringValue)

      if(stringValue === "+" || stringValue === "-" || stringValue === "*" || stringValue === "/" || stringValue === "%" || stringValue === "."){

        setStoredValues((prevValues) => [...prevValues, stringValue])

      } else {

        setStoredValues((prevValues) => {

          if(prevValues.includes(0) && prevValues.length === 1 && newNumberValue !== 0) {

            let newArray = storedValues;

            return newArray = [newNumberValue]
            
          } else {

            return [...prevValues, newNumberValue]
          }

        })
      }

    }

  return (
    <div className='bg-black w-full h-full grid grid-cols-4 gap-2 p-2 text-3xl sm:text-4xl font-medium rounded-b-md'>

            <ResetButton storedValues={storedValues} setStoredValues={setStoredValues} />

            <DeleteButton storedValues={storedValues} setStoredValues={setStoredValues} />

            <PercentageSign getButtonValue={getButtonValue} />

            <DivisionSign getButtonValue={getButtonValue} />

            <button className='rounded-md active:bg-zinc-300 bg-zinc-400' onClick={(e) => {
              getButtonValue(e.currentTarget.innerHTML)

            }} >1</button>

            <button className='rounded-md active:bg-zinc-300 bg-zinc-400' 
            onClick={(e) => {
              getButtonValue(e.currentTarget.innerHTML)

            }}>2</button>

            <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
            onClick={(e) => {
              getButtonValue(e.currentTarget.innerHTML)

            }} >3</button>

            <TimesSign getButtonValue={getButtonValue} />

            <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
            onClick={(e) => {
              getButtonValue(e.currentTarget.innerHTML)

            }} >4</button>

            <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
            onClick={(e) => {
              getButtonValue(e.currentTarget.innerHTML)

            }} >5</button>

            <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
            onClick={(e) => {
              getButtonValue(e.currentTarget.innerHTML)

            }} >6</button>

            <MinusSign getButtonValue={getButtonValue}/>

            <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
            onClick={(e) => {
              getButtonValue(e.currentTarget.innerHTML)

            }} >7</button>

            <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
            onClick={(e) => {
              getButtonValue(e.currentTarget.innerHTML)

            }} >8</button>

            <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
            onClick={(e) => {
              getButtonValue(e.currentTarget.innerHTML)

            }} >9</button>

            <PlusSign getButtonValue={getButtonValue}/>

            <button className='rounded-md active:bg-zinc-300 bg-zinc-400 col-span-2'
            onClick={(e) => {
              getButtonValue(e.currentTarget.innerHTML)

            }} >0</button>
            
            <DotSign getButtonValue={getButtonValue} />

            <EqualSIgn
            storedValues={storedValues}
            setStoredValues={setStoredValues}/>
            
          </div>
  )
}

export default CalculatorButtons