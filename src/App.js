import { useState, useRef } from 'react';
import './App.css';

function App() {

  const [Tempo, setTempo] = useState()
  const inputRef = useRef();
  
  function NewCity(e) {
    e.preventDefault();
    if(inputRef.current.value !== "") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ inputRef.current.value }&units=metric&appid=d2803d4982fc37954de5a241d6db1fb1&lang=pt_br`).then(res => res.json()).then(resp => {
        if(resp.cod === "404"){
          alert("erro")
        } else {
          setTempo(resp)
          console.log(resp)
        }
      })
    }
  }

  return (
    <main className="App">
      <h1>Previsão do tempo</h1>
      <form onSubmit={NewCity}>
        <label>
          <span>Digite o nome da cidade:</span>
          <br />
          <input type="text" name="city" placeholder="cidade:" ref={inputRef}/>
        </label>
        <input type="submit" value="Enviar" className='btn' />
      </form>

      {Tempo && (
        <section className='temp'>

          <div className='Location'>
            <h2>{Tempo.name}</h2>
          </div>
          
          <div className='Temp_Humidity'>
            <div>
              <p>Temperatura: {Tempo.main.temp}°</p>
              <div className='Temp_r'></div>
            </div>
            <div>
              <p>Umidade: {Tempo.main.humidity}%</p>
              <div className='Umi_r'></div>
            </div>
          </div>
          
          <div className='sky'>
            <div className='sky_ico'>
              <img src={`http://openweathermap.org/img/wn/${Tempo.weather[0].icon}.png`} alt='desenho da condição atual do céu' />
            </div>
            <p>{Tempo.weather[0].description}.</p>
          </div>

        </section>
      )}
      
      
    </main>
  );
}

export default App;
