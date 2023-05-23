import { useState } from 'react'

import './App.css'

function App() {

  const [isChanged, setIsChanged] = useState(false);
  const [newBackground,setNewBackground] = useState({})
  const [textColor,setTextColor] = useState('#4242fc');

  function detectarColor(e){
    setIsChanged(true);
    if(isChanged){ //COMPRUEBO SI SE CAMBIO EL COLOR
        const newBackgroundStyle = { // CREO UN OBJETO PARA ESTILIZAR EL BACKGROUND COLOR DESDE EL CONTENEDOR
          backgroundColor : e.target.value, //LE ASIGNO AL OBJETO UN BACKGROUND COLOR PARA MANIPULARLO EN JSX
        }
        setNewBackground(newBackgroundStyle)
      setTextColor(e.target.value);
      return;
    }
  }

  return (
    <>
      <div className="container-background" style={newBackground} > {/*{} PRIMERAS LLAVES INDICAN QUE SE VA A COLOCAR ALGO EN JSX Y LAS SEGUNDAS LLAVES DEL OBJETO EN SI, SIGNIFICA QUE SERA UN OBJETO LITERAL EN JS
      JSX espera recibir un objeto JavaScript que contenga las propiedades y valores de estilo. Al utilizar llaves, indicas que estás insertando código JavaScript dentro de JSX y que deseas evaluar esa expresión como un objeto JavaScript literal.
      */ }
          <div className="container-card-color" >

                  <div className="container-color" style={newBackground}>
                    
                  </div>
                  <div className="container-text-color">
                    <p>{textColor}</p>
                  </div>
                  <div className="btn-change">
                    <input type="color" name="change" id="change" onChange={detectarColor} defaultValue='#4242fc' />
                  </div>

          </div>
      </div>
    </>
  )
}

export default App
