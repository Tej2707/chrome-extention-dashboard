fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(res=> res.json())
  .then(data=>  {
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("author").textContent= `pic-:${data.user.name}`
  })

  fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then(res => {
    if(! res.ok){
      throw Error("Oops Something Went Wrong")
    }
    return res.json()
  })
  .then( data => {
    document.getElementById("crypto-top").innerHTML=`
    <img src=${data.image.small} />
    <span>${data.name}</span>
    `
    document.getElementById("crypto").innerHTML+= `
  <p>💰 ₹: ${data.market_data.current_price.inr}</p>
  <p>👆 ₹: ${data.market_data.high_24h.inr}</p>
  <p>👇 ₹: ${data.market_data.low_24h.inr}</p>
  `
  })
  .catch(err => console.error(err))

 
 function getCurrentTime(){
  const date= new Date()
  document.getElementById("timee").textContent= date.toLocaleTimeString("en-IN" ,{timeStyle: "short"});
 }
 setInterval(getCurrentTime , 1000)
 
 navigator.geolocation.getCurrentPosition(position =>{
  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
  .then(res=>{
    if(!res.ok){
      throw Error("not found")
    }
    return res.json()
  })
  .then(data=>{
    console.log(data)
    const iconUrl= `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    console.log(iconUrl)
    document.getElementById("weather").innerHTML= `
    <img src= ${iconUrl} />

    <p>${Math.round(data.main.temp)} °F</p>
    <p class ="weather-city">${data.name} </p>
    `
  })
  .catch(err => console.error(err))
 })