

import React from 'react'

type TimesSignProps = {
  getButtonValue: (value: string) => void
}

const TimesSign = ({getButtonValue}: TimesSignProps) => {
  return (
    <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
    onClick={(e) => {
      getButtonValue(e.currentTarget.innerHTML)
    }} >*</button>
  )
}

export default TimesSign