
import React, { useState } from 'react';
import { BsCalculatorFill } from "react-icons/bs";
import './App.css';


function App() {
  const [nota1, setNota1] = useState(0)
  const [nota2, setNota2] = useState(0)
  const [nota3, setNota3] = useState(0)
  const [nota4, setNota4] = useState(0)
  const [peso1, setPeso1] = useState(1)
  const [peso2, setPeso2] = useState(1)
  const [peso3, setPeso3] = useState(1)
  const [peso4, setPeso4] = useState(1)
  const [resultado, setResultado] = useState('')

  const calcularMedia = () => {
    const totalPesos = parseFloat(peso1) + parseFloat(peso2) + parseFloat(peso3) + parseFloat(peso4)
    const media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3 + nota4 * peso4) / totalPesos

    if (media >= 7) {
      setResultado('ALUNO APROVADO')
    } else {
      setResultado('ALUNO REPROVADO')
    }
  };

  return (
    <div>
      <div className='div-titulo'>
      <h1>Calculadora de Média das Notas <BsCalculatorFill /></h1><br/><br/><br/>
      </div>
     

<center>
      <div>
        <label>Nota 1 : </label>
        <input 
          type="number" 
          value={nota1} 
          onChange={(e) => setNota1(Math.min(Math.max(e.target.value, 0), 10))} 
        />
        <label>Peso: </label>
        <input 
          type="number" 
          value={peso1} 
          onChange={(e) => setPeso1(e.target.value)} 
        />
      </div>

      <div>
        <label>Nota 2 : </label>
        <input 
          type="number" 
          value={nota2} 
          onChange={(e) => setNota2(Math.min(Math.max(e.target.value, 0), 10))} 
        />
        <label>Peso: </label>
        <input 
          type="number" 
          value={peso2} 
          onChange={(e) => setPeso2(e.target.value)} 
        />
      </div>

      <div>
        <label>Nota 3 : </label>
        <input 
          type="number" 
          value={nota3} 
          onChange={(e) => setNota3(Math.min(Math.max(e.target.value, 0), 10))} 
        />
        <label>Peso: </label>
        <input 
          type="number" 
          value={peso3} 
          onChange={(e) => setPeso3(e.target.value)} 
        />
      </div>

      <div>
        <label>Nota 4 : </label>
        <input 
          type="number" 
          value={nota4} 
          onChange={(e) => setNota4(Math.min(Math.max(e.target.value, 0), 10))} 
        />
        <label>Peso: </label>
        <input 
          type="number" 
          value={peso4} 
          onChange={(e) => setPeso4(e.target.value)} 
        />
      </div>

      <button onClick={calcularMedia}>Calcular Média</button>

      {resultado && (
        <h2>{resultado}</h2>
      )}
      </center>
    </div>
    
  )
}

export default App

