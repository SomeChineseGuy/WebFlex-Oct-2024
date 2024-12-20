const apiKey = "3b5c51a03cca3b792e0b9c218f807acd";

$(document).ready(() => {
  
  // Step one: Targetting an element
  // Step two: Adding an event listener
  // Step Three: Effect

  // Targetting an element in jQuery is the same as targetting it in CSS
  // .box-one
  // Adding event listener - basically anything the user can do
  // The most common event is Click
  $('.box-one').on('click', () => {
    // Effect - this means to CRUD HTML or CSS
    $('.box-two').css('background-color', 'green');

  });

  $('.box-two, .box-one').on('click', ()=> {

    // $('.box-one').css('background-color', 'white');
    // $('.box-two').css('background-color', 'white');

    $('.box-one, .box-two').css('background-color', 'white');
  });

  $('.box-three').on('click', () => {
    const pTag = `<p> I am the append function </p>`
    $('#dog-container').append(pTag);
    $('#dog-container').prepend(`<p> I am the Prepend function </p>`)
    $('.box-three h1').text("Clicked!")
  })


  // We are going to target the form and watch for the event submit
  // submit is only for form

  $('.weather').on('submit', (event) => {
    event.preventDefault();
    const $userInput = $('.user-city').val();
    // console.log($userInput)
    $.ajax({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${$userInput}&units=metric&appid=${apiKey}`,
    }).then((res) => {
      addWeather(res)
      
    }).catch((err) => {
      console.log(err);
    })
  })

});

const addWeather = (data) => {
  $('#dog-container').append(weatherData(data))
}

const weatherData = (weatherData) => {
  return `
   <div>
      <h1>City: ${weatherData.name} </h1>
      <h1> Weather: ${weatherData.weather[0].main} </h1>
      <p>Temp: ${weatherData.main.temp} - high of ${weatherData.main.temp_max} low of ${weatherData.main.temp_min}</p>
    </div>  
  `
}