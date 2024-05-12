import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";
function calculateResult(inputs) {
  const array = [];
  let prevInvestment = inputs[0];
  let totalInterest = 0;
  for(let i = 1; i <= inputs[3]; i++){
    const row = [];
    row.push(i);
    row.push(Math.round(prevInvestment * ((100 + inputs[2]) / 100) + inputs[1]));
    row.push(Math.round(prevInvestment * inputs[2] / 100))
    row.push(Math.round(totalInterest + (prevInvestment * inputs[2] / 100)))
    row.push(inputs[0] + (i * inputs[1]))
    prevInvestment = (prevInvestment * ((100 + inputs[2]) / 100)) + inputs[1];
    totalInterest = totalInterest + (prevInvestment * inputs[2] / 100);
    array.push(row);
  }
  return array;
  
}
function App() {
  const [resultState, setResultState] = useState([]);
    function handleInputChange(inputs) {
        setResultState((resultState) => {
            return calculateResult(inputs);
        })
    }
  return (
    <>
      <Header />
      <UserInput handleInputChange = {handleInputChange}/>
      <Results resultArray={resultState}/>
    </>
    
  )
}

export default App
