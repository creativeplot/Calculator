
type DivisionSignProps = {
  getButtonValue: (value: string) => void
}


const DivisionSign = ({getButtonValue}: DivisionSignProps) => {

  return (
    <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
    onClick={(e) => {
      getButtonValue(e.currentTarget.innerHTML)
    }} >/</button>
  )
}

export default DivisionSign