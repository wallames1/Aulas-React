const Challenge = ()=>{

    const valor1 = 5
    const valor2 = 2
    
    return(
        <div>
            <p>valor1 ={valor1}</p>
            <p>valor2 ={valor2}</p>

            <button onClick={() => console.log(valor1+valor2) }>somar</button>
        </div>
    )
}
export default Challenge;