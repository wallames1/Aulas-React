import { useState } from "react"
const ManageData = () => {

    let someData = 10;

    const [number, setNumber] = useState(1);
    console.log(number)
  return (
    <div>
        <p>valor:{someData}</p>
        <button onClick={()=>(someData=15)} >MANAGE DATA</button>

        <div>
            <p>valor: {number}</p>
            <button onClick={()=> setNumber(9)} >MANAGE DATA</button>
            

        </div>
    </div>
    
  )
}

export default ManageData