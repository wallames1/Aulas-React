import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);
  return (
    <div>
        <h1>isso será exibido ?</h1>
        {
            x && <p>Se x for true, Sim</p>
        }
    </div>
  )
}

export default ConditionalRender