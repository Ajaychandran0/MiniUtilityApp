export interface Option {
    country: string;
    state: string;
    name: string;
    lat: number;
    lon: number;
}

type Main = {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
}
type Weather = {
    main: string,
    icon: string,
    description: string
}
type Wind = {
    speed: number,
    gust: number,
    deg: number,
}
type Clouds = {
    all: number
}
type List = {
    dt: number,
    main: Main,
    weather: Weather[],
    wind: Wind,
    clouds: Clouds,
    pop: number
    visibility: number
}
export interface Forecast {
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
    list: List[]
}