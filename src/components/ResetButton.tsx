
type ArrayValues = string | number

type ResetButtonProps = {
  storedValues: ArrayValues[]
  setStoredValues: React.Dispatch<React.SetStateAction<ArrayValues[]>>
}


const ResetButton = ({storedValues, setStoredValues}: ResetButtonProps) => {

  function resetButton () {

    let newArrayValue = [...storedValues]
    newArrayValue = [0]

    setStoredValues(newArrayValue)
    
  }

  

  return (
    <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
    onClick={resetButton}>ac</button>
  )
}

export default ResetButton