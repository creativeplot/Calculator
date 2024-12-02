
import { useState, useEffect } from "react"

type PlusSignProps = {
  getButtonValue: (value: string) => void
}

const PlusSign = (
  {getButtonValue}: PlusSignProps) => {

  return (
    <button className='rounded-md active:bg-zinc-300 bg-zinc-400' onClick={(e) => {
      getButtonValue(e.currentTarget.innerHTML)
    }}>+</button>
  )
}

export default PlusSign