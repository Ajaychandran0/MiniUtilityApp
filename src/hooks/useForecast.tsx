import { useState, ChangeEvent, useEffect } from "react"
import { Option, Forecast } from "../types/weatherApp"

const useForecast = () => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
    const [city, setCity] = useState<string>("")
    const [options, setOptions] = useState<[]>([])
    const [selectedCity, setSelectedCity] = useState<Option | null>(null)
    const [forecast, setForecast] = useState<Forecast | null>(null)

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

    const onSubmit = () => {
        if (!selectedCity) return
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${selectedCity.lat}&lon=${selectedCity.lon}&units=metric&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                const forecastData = {
                    ...data.city,
                    list: data.list.slice(0,16)
                }
                setForecast(forecastData)
            })
    }

    useEffect(() => {
        if (selectedCity) {
            setCity(selectedCity.name)
            setOptions([])
        }
    }, [selectedCity])

    return {
        city,
        options,
        forecast,
        onOptionSelect,
        onCityChange,
        onSubmit
    }
}

export default useForecast
