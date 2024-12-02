
type DotSignProps = {
  getButtonValue: (value: string) => void
}

const DotSign = ({getButtonValue}: DotSignProps) => {

  return (
    <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
    onClick={(e) => {
      getButtonValue(e.currentTarget.innerHTML)
    }} >.</button>
  )
}

export default DotSign