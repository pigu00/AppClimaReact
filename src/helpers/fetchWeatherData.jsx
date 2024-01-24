export const fetchWeatherData = async (city, apiKey) => {
    const difKelvin = 273.15;
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  
    try {
      const response = await fetch(`${urlBase}?q=${city}&appid=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ocurrió un error: ', error);
      throw error;
    }
  };