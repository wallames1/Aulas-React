import "./App.css";

import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

function App() {


  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);

        // Verifica se a resposta foi bem-sucedida
        if (res.ok) {
          const data = await res.json();
          setProducts(data); // Atualiza o estado com os dados recebidos
        } else {
          console.error("Erro ao buscar os produtos:", res.status);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }

    fetchData();
  }, []); // O array vazio garante que a requisição aconteça apenas uma vez após o componente ser montado

  console.log(products); // Aqui você pode ver os dados no console

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product ={
      name,
      price,
    }
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })


    //3.carregamento dinamico
    const addedProduct = await res.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct])
    setName ("")
    setPrice ("")

  }
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      
        <ul>
          {products.map((product) =>(
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
        </ul>
        
        <div className="add-product">
        <p>Adicionar produto:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
          {/* 7 - state de loading no post */}
        </form>
      </div>
      
      </div>
    
  );
}

export default App;