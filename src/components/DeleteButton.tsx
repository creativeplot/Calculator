

import { useRef } from "react"

type ArrayValues = string | number;

type DeleteButtonProps = {
  storedValues: ArrayValues[]
  setStoredValues: React.Dispatch<React.SetStateAction<ArrayValues[]>>
}

const DeleteButton = (
  {storedValues, setStoredValues}: DeleteButtonProps) => {

    // i wanted to use pop() in this code version so the code got a little bit more complex because pop() change the array directly and i dont want that
    function handleDelete () {

      setStoredValues((prevNumbers) => {

        // do something if prevNumbers is undefined to satisfy typescript
        if(!prevNumbers || prevNumbers.length === 1) return [0]

        const newNumbers = [...prevNumbers]

        newNumbers.pop()

        return [...newNumbers]
      })

    }

  return (
    <button className='rounded-md active:bg-zinc-300 bg-zinc-400'
    onClick={() => {
      handleDelete()
    }}>ex</button>
  )
}

export default DeleteButton