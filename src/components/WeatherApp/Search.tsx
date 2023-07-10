import { ChangeEvent } from "react";
import { Option } from "../../types/weatherApp"

interface Props {
    city: string;
    options: [];
    onCityChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onOptionSelect: (option: Option) => void;
    onSubmit: () => void;
}

const Search: React.FC<Props> = ({
    city,
    options,
    onCityChange,
    onOptionSelect,
    onSubmit
}): JSX.Element => {

    return (
        <main className="flex justify-center items-center bg-gradient-to-br from-blue-900 via-yellow-200 to-yellow-500 h-[94vh] w-full">
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

export default Search
