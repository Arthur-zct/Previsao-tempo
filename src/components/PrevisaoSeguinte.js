import React from 'react'
import "./PrevisaoSe.css"


const PrevisaoSeguinte = ({ Previsao }) => {
    const data = new Date(Previsao.dt_txt);
    const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const diaSemana = diasDaSemana[data.getDay()];

    return (
        <div className='PrevisaoSeguinteDiv'>
            <div>
                <h4> {diaSemana}. </h4>
            </div>
            <div className='Location'>
                <h3 className='titleh3' title='Temperatura estimada para as 12 horas' >{Math.round(Previsao.main.temp)}°</h3>
            </div>

            <div className='image'>
                <div className='sky_ico'>
                    <img src={`http://openweathermap.org/img/wn/${Previsao.weather[0].icon}.png`} alt='desenho da condição atual do céu' />
                </div>
                {/*<p>{Previsao.weather[0].description}.</p> */}
                
            </div>
        </div>
    )
}

export default PrevisaoSeguinte