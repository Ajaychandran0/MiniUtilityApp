import { useState, ChangeEvent, useEffect } from "react"
import { Option } from "../../types/weatherApp"

const WeatherApp: React.FC = (): JSX.Element => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  const [city, setCity] = useState<string>("")
  const [options, setOptions] = useState<[]>([])
  const [selectedCity, setSelectedCity] = useState<Option | null>(null)

  const getSearchOptions = (value: string) => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${API_KEY}`)
      .then((res) => res.json())
      .then(data => setOptions(data))
  }

  const onOptionSelect = (option: Option) => {
    setSelectedCity(option)
  }

  const onCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setCity(value)
    if (value) getSearchOptions(value)
  }

  const onSubmit =()=> {
    if(!selectedCity) return
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCity.lat}&lon=${selectedCity.lon}&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  useEffect(() => {
    if(selectedCity) {
      setCity(selectedCity.name)
      setOptions([])
    }
  }, [selectedCity])

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-blue-900 via-yellow-200 to-yellow-500 h-[89.6vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:px-20 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded text-zinc-700">
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p className="text-sm mt-2">
          Enter a place you want to know the weather of and select an option from the dropdown
        </p>
        <div className="relative flex mt-10 md:mt:4">
          <input
            type="text"
            value={city}
            className="px-2 py-1 rounded-l-md border-2 border-white"
            onChange={onCityChange}
          />

          <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
            {options.map((option: Option, index: number) => (
              <li key={option.name + "-" + index}>

                <button className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer" onClick={() => onOptionSelect(option)}>
                  {option.name}, {option?.state}, {option?.country}
                </button>
              </li>
            ))}
          </ul>

          <button className="rounded-r-md border-2 border-zinc-400 hover:border-zinc-600 hover:text-zinc-600 text-zinc-400 px-2 py-1 cursor-pointer" onClick={onSubmit}>
            search
          </button>
        </div>
      </section>
    </main>
  )
}

export default WeatherApp