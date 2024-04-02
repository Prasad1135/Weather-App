import { useState,useEffect } from 'react'
import './style.css'

function Weather() {
    const[search,setSearch]=useState("")
    const[weather,setWeather]=useState({})
    const[latitude,setLatitude]=useState('')
    const[longitude,setLongitude]=useState('')
    
  
    const api={
      key: "0bb866802c0dc07b2737ebe202af5891",
      base: "https://api.openweathermap.org/data/2.5/weather"
    }
  
   function  handelSearch(){
    fetch(`${api.base}?q=${search}&lat=${latitude}&lon=${longitude}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(d=>setWeather(d))
    }
    useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      })
    },[latitude,longitude])

    return (
        
        <div className='maincard'>
            <center>

                <input type='text' placeholder='Enter City' onChange={(e) => setSearch(e.target.value)} />
                <button type='button' onClick={handelSearch}>Search</button>
                <br></br><br></br>

            </center>
            {

                (typeof weather.main != "undefined") ? (


                    <div className="cards">
                        <center className='centered'>
                                <p>City: <b>{weather.name}</b> </p> <br />                         
                                <p>Temp: <b>{weather.main.temp}°c</b></p> <br />
                                <p>Clouds:<b>{weather.weather[0].description}</b></p><br />
                                <p>{weather.icon}</p>
                        </center>
                    </div>
                ) : ("")
            }
        </div>
    
    )
}

export default Weather
