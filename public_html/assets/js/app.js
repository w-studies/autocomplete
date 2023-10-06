const inputCountryName = $('#countryName')
const countriesListContainer = $('#countryList')
const messenger = $('#messenger')

inputCountryName.on('input', function () {
  let query = this.value
  if (query != '') {
    $.ajax({
      url: 'api/search-country',
      type: 'GET',
      data: {
        query
      },
      success: function (response) {
        const lis = response.map(
          ({ countryname }) =>
            `<li class='list-group-item list-group-item-action'>${countryname}</li>`
        )

        countriesListContainer.fadeIn()
        countriesListContainer.html(lis)
      }
    })
  } else {
    countriesListContainer.fadeOut()
    countriesListContainer.html('')
  }
})

countriesListContainer.on('click', 'li', function () {
  inputCountryName.val($(this).text())
  countriesListContainer.fadeOut()
})

$('#addCountryForm').submit(function (event) {
  event.preventDefault()
  var countryName = inputCountryName.val()
  $.ajax({
    type: 'POST',
    url: 'addCountry.php',
    data: {
      countryName: countryName
    },
    success: function (response) {
      countriesListContainer.hide()
      messenger.html(response).show()
    }
  })
})
