
import React from 'react'

type MinusSignProps = {
  getButtonValue: (value: string) => void
}

const MinusSign = ({ getButtonValue }: MinusSignProps) => {

  return (
    <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
    onClick={(e) => {
      getButtonValue(e.currentTarget.innerHTML)
    }} >-</button>
  )
}

export default MinusSign