import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name,setName] = useState("wallames")
  return (
    <div>
        <h1>ISSO SERÀ EXIBIDO ?</h1>
        {
            x && <p>Se x for true, Sim</p>
        }
        <h1>IF TERNARIO</h1>
        {name === "wallames" ? (
        <div>
          <p>o nome é wallames</p>
        </div>
      ) : (<div>
        <p>o nome não é wallames</p>
      </div>)}
      <button onClick={()=> setName("joao")}>TROCAR</button>
    </div>
  )
}

export default ConditionalRender