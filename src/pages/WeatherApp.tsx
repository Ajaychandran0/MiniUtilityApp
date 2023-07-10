import { useState, useEffect } from "react"
import axios from 'axios';

const WeatherApp: React.FC = () => {
    type Weather = { description: string }
    interface WeatherData {
        name: string;
        main: { temp: string };
        weather: Weather[];
    }

    const [weatherData, setWeatherData] = useState<WeatherData>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
              const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                  q: 'CityName,CountryCode', // Replace with the desired city name and country code
                  appid: 'YOUR_API_KEY', // Replace with your OpenWeatherMap API key
                  units: 'metric' // Adjust the units as needed
                }
              });
              setWeatherData(response.data);
              setLoading(false);
            } catch (error) {
              setError('Error fetching weather data');
              setLoading(false);
            }
          };
          fetchWeatherData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {weatherData && (
                <div>
                    <h2>{weatherData?.name}</h2>
                    <p>Temperature: {weatherData.main?.temp}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp

