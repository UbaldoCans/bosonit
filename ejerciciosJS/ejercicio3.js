//Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales
const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]
  let countryCap = {
    pais: 'Spain',
    capitall: false
  }

  let cityCapital = arrCities.filter(function(city){
    return city.country == this.pais && city.capital == this.capitall;
  }, countryCap);
  console.log(cityCapital)
