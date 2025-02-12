import './App.css';
import {useState, useEffect} from 'react'
 
function App() {
  const [products, setProducts] = useState([])
  
  // 1 - resgatando dados
  useEffect(() => {
    async function fetchData(){
      const res = await fetch("http://localhost:3000/products")
      const data = await res.json()
      setProducts(data)
    }
    fetchData()
 
  }, []);
 
 
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>{products.map((product) => (
        <li key={product.id}>
          {product.name} - R$: {product.price}
        </li>
      ))}</ul>
    </div>
  );
}
 
export default App;