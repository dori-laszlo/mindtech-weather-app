// This array of object contains the list of the cities with name, courty and ID.

const cities = [
  {
    name: 'Arhus',
    country: 'DK',
    id: 2624652,
  },
  {
    name: 'Copenhagen',
    country: 'DK',
    id: 2618425,
  },
  {
    name: 'London',
    country: 'GB',
    id: 2643743,
  },
  {
    name: 'Manchester',
    country: 'GB',
    id: 2643123,
  },
  {
    name: 'Edinburgh',
    country: 'GB',
    id: 2650225,
  },
  {
    name: 'Paris',
    country: 'FR',
    id: 2968815,
  },
  {
    name: 'Toulouse',
    country: 'FR',
    id: 6453974,
  },
  {
    name: 'Strasbourg',
    country: 'FR',
    id: 2973783,
  },
  {
    name: 'Csukásitanyák',
    country: 'HU',
    id: 3053876,
  },
  {
    name: 'Budapest',
    country: 'HU',
    id: 7284844,
  },
  {
    name: 'Amsterdam',
    country: 'NL',
    id: 2759794,
  },
  {
    name: 'Berlin',
    country: 'DE',
    id: 2950159,
  },
  {
    name: 'Moscow',
    country: 'RU',
    id: 524901,
  },
  {
    name: 'Tokyo',
    country: 'JP',
    id: 1850147,
  },
  {
    name: 'Prague',
    country: 'CZ',
    id: 3067696,
  },
  {
    name: 'Bratislava',
    country: 'SK',
    id: 3060972,
  },
  {
    name: 'Milano',
    country: 'IT',
    id: 3173435,
  },
  {
    name: 'Verona',
    country: 'IT',
    id: 6541865,
  },
  {
    name: 'New York',
    country: 'US',
    id: 5128638,
  },
  {
    name: 'Rio de Janeiro',
    country: 'BR',
    id: 3451190,
  },
  {
    name: 'Mexico City',
    country: 'MX',
    id: 3530597,
  },
  {
    name: 'Melbourne',
    country: 'AU',
    id: 7839805,
  },
  {
    name: 'Sydney',
    country: 'AU',
    id: 2147714,
  },
  {
    name: 'Shanghai',
    country: 'CN',
    id: 1796236,
  },
  {
    name: 'Beijing',
    country: 'CN',
    id: 1816670,
  },
  {
    name: 'New Delhi',
    country: 'IN',
    id: 1261481,
  },
  {
    name: 'Tallahassee',
    country: 'US',
    id: 4174715,
  },
  {
    name: 'California',
    country: 'US',
    id: 5332921,
  },
  {
    name: 'Reykjavik',
    country: 'IS',
    id: 6692263,
  },
  {
    name: 'Oslo',
    country: 'NO',
    id: 6453366,
  },
];

// This function is stands for to sort the objects in the array above by name value.
function compare(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

const sortedCities = cities.sort(compare);
export default sortedCities;
