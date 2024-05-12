const ids = ["box1", "box2", "box3", "box4"];
export default function UserInput({handleInputChange}) {
    function check4ValidInput() {
        const values = ids.map((id) => document.getElementById(id).value);
    
        if (values.every((value) => value !== "" && !isNaN(value))) {
          const numericValues = values.map((value) => parseFloat(value));
    
          if (
            numericValues.every((value) => value > 0) &&
            Number.isInteger(numericValues[3])
          ) {
            handleInputChange(numericValues);
          }
          else {
            handleInputChange([])
          }
        }
        else {
            handleInputChange([])
        }
      }
    return(
        <div id = "user-input">
            <div className="input-group">
                <p> 
                    <label>INITIAL INVESTMENT</label>
                    <input type = "number" id = "box1" onChange = {check4ValidInput}></input>
                </p>
                <p>
                    <label>EXPECTED RETURN</label>
                    <input type = "number" id = "box2" onChange = {check4ValidInput}></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input type = "number" id = "box3" onChange = {check4ValidInput}></input>
                </p>
                <p>  
                    <label>DURATION</label>
                    <input type = "number" id = "box4" onChange = {check4ValidInput}></input>
                </p> 
            </div> 
        </div>
    )
}