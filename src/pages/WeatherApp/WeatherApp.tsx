import Search from "../../components/WeatherApp/Search"
import Forecast from "../../components/WeatherApp/Forecast"
import useForecast from "../../hooks/useForecast"

const WeatherApp: React.FC = (): JSX.Element => {
  const {
    city,
    options,
    forecast,
    onOptionSelect,
    onCityChange,
    onSubmit
  } = useForecast()

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-blue-900 via-yellow-200 to-yellow-500 h-auto w-full pt-10">
      {
        forecast ? (
          <Forecast forecast={forecast} />
        ) : (
          <Search
            city={city}
            options={options}
            onCityChange={onCityChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
        )
      }

    </main>
  )
}

export default WeatherApp
