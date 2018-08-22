const API_KEY = '94405e6cf2cc96fb5e6cd10c101446c7';

// This function calls the API and get data from the city which has the ID what this function
// gets from the handleSubmit method (in App.js) as parameter.
function getDataFromApi(id) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`,
  )
    .then(response => {
      if (response.ok) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error('Failed to load'));
      }
    })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(`Error: ${error.message}`);
      throw error;
    });
}

export default getDataFromApi;
