$(document).ready(() => {
  // Target
  // Add event
  // Effectasd

  $('#dog-form').on('submit', (event) => {
    event.preventDefault();
    const $dogName = $('#dog-name').val();
    const $dogBreed = $('#dog-breed').val();
    const $dogWeight = $('#dog-weight').val();
    console.log($dogName, $dogBreed, $dogWeight);
    $.ajax({
      method: "POST",
      url: "http://localhost:8001/dogs",
      data: {
        name: $dogName,
        breed: $dogBreed,
        weight: $dogWeight
      }
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })

  })

})