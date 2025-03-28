import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'  

const Products = () => {
  const { counter } = useContext(CounterContext);  // Acesso ao valor do contador

  return (
    <div>
      <h1>Products</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Products