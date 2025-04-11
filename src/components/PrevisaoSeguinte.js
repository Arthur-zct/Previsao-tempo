import React from 'react'
import "./PrevisaoSe.css"


const PrevisaoSeguinte = ({Previsao}) => {
    console.log(Previsao)
  return (
    <div className='PrevisaoSeguinteDiv'>
        <div className='Location'>
            <h3>{Previsao.main.temp.toFixed(1)}</h3>
        </div>
        
        <div className='image'>
            <div className='sky_ico'>
              <img src={`http://openweathermap.org/img/wn/${Previsao.weather[0].icon}.png`} alt='desenho da condição atual do céu' />
            </div>
            <p>{Previsao.weather[0].description}.</p>
          </div>
    </div>
  )
}

export default PrevisaoSeguinte