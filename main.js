//c'est mon appel à l'api avec la city en paramètre de fonction
 let apiCall = function (city) {
  const env = new VarEnv();
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${env.apikey}&units=metric&lang=fr`;
  
  fetch(url).then((response) =>
    response.json().then((data) => {
      console.log(data)
      document.querySelector('#city').innerHTML = data.name;
      document.querySelector('#temp').innerHTML = 
        "<i class='fas fa-temperature-high'></i>"  + " " + data.main.temp + '°';
      document.querySelector('#humidity').innerHTML =
        "<i class='fas fa-tint'></i>"  + " " + data.main.humidity + '%';
      document.querySelector('#wind').innerHTML = 
        "<i class='fas fa-wind'></i>" + " " + data.wind.speed + 'km/h';
    })
  )
  .catch((err) => {
    console.log('Error : ' + err)
    apiCall('Honolulu');
    alert("Sorry guys I don't have this city")
  });
  }
  //c'est l'écouteur d'évenement sur la soumission du formulaire
 document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
  });
apiCall('Honolulu');



  


