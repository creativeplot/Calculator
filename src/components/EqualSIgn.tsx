


type ArrayValues = string | number;

type EqualSIgnProps = {

  storedValues: ArrayValues[]
  setStoredValues: React.Dispatch<React.SetStateAction<ArrayValues[]>>

}


const EqualSIgn = (
  { storedValues, setStoredValues}: EqualSIgnProps) => {

    function operationsHandler(arrayValues:ArrayValues[])
    {

      let numberBuilder: string = '';

      let resultsAccumulator: number = 0

      let operatorHolder: null | string = null

      let handlingFirstNumber: boolean = true

      arrayValues.forEach((value, index) => {

        if(typeof value === 'string' && ['+', '-', '*', '/','%'].includes(value)) {

          // Skip consecutive operators by checking if the previous value is also an operator
          // if the array includes more than the standard number (0), and the type of this value is a string, and this string is equal to any sign operator, the condition will skip it
          if(index > 1 && typeof arrayValues[index -1] === 'string' && ['+', '-', '*', '/', '%'].includes(arrayValues[index - 1] as string)){
            return
          }

          // Handle operation when operator is encountered
          if(handlingFirstNumber) {

            // this second 'if' serves to convert the number string to a normal number, so when it is converted i set handlingFirstNumber to false, to now process this converted number in the else

            resultsAccumulator = parseFloat(numberBuilder)
            handlingFirstNumber = false

          } else {

            resultsAccumulator = processOperations(resultsAccumulator, parseFloat(numberBuilder), operatorHolder!) // The ! (non-null assertion operator) is used in TypeScript to assert that a value is not null or undefined, telling TypeScript to treat it as a defined value. However, using it incorrectly could lead to runtime errors if the value is actually undefined or null.
          }

          operatorHolder = value // Store the current operator for the next operation. After processing an operator, we need to remember which operator to apply when the next number is encountered. By storing it in operatorHolder, we ensure that the correct operation is performed between resultsAccumulator and the next number.

          numberBuilder = ''; // Clear numberBuilder to start building the next number.

        } else {
          // Main 'else'
          // this 'else' works in conjuntion with the main 'if' because if no operator is found i keep building the numbers so when a operator is found, the built number here will be operated by the second 'if' inside the main 'if'


          // if a operator is not found i keep building the numbers
          if(value === ".") {
            // if a dot is found i attach it to the previous number
            numberBuilder += value

          } else {

            // if no dot is found i convert the next number to a string and concact it with the previous number
            numberBuilder += value.toString()
          }

        }
      });

      // handling the last number that hadnt a operation yet
      if (numberBuilder !== "") {

        resultsAccumulator = processOperations(resultsAccumulator, parseFloat(numberBuilder), operatorHolder!)

      } else {

        numberBuilder = "0"
      }

      return resultsAccumulator // returning the final result
      
    }

    function processOperations (num1: number, num2: number, operator: string) 
    {
      // if(!operator) return
      switch(operator){
        case "+":
          return num1 + num2
        case "-":
          return num1 - num2
        case "*":
          return num1 * num2
        case "/":
          return num2 !== 0 ? num1 / num2 : 0;
        case "%":
          return num1 * (num2 !== 0 ? num2 / 100 : 0)
          default:
            return num1
      }
    }

    function resultHandler () {

      const result = operationsHandler(storedValues)

      const  formattedResult = parseFloat(result.toFixed(10))

      setStoredValues([formattedResult])


    }

  return (
    <button className='rounded-md active:bg-zinc-300 bg-zinc-400'onClick={() => {
      resultHandler()
    }} >=</button>
  )
}

export default EqualSIgn