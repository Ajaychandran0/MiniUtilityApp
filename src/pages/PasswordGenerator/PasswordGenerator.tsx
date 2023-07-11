import { useState } from "react"

const PasswordGenerator: React.FC = (): JSX.Element => {
    const [generatedPassword, setGeneratedPassword] = useState<string>("")
    const [copied, setCopied] = useState<boolean>(false)

    const length = 12
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const number = "0123456789"
    const symbols = "!@#$%^&*()_+~|}{[]/?-="
    const allChars = upperCase + lowerCase + number + symbols

    const createPassword = (): string => {
        let password = ""
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        while (length > password.length) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        return password
    }

    const copyPassword = () => {
        navigator.clipboard.writeText(generatedPassword).then(() => {
            setCopied(true)
        })

    }

    return (
        <main className="bg-[#002339] h-[100vh] p-8">
            <div className="container pt-32 w-[90%] max-w-[800px] p-[12%]">
                <h1 className="font-medium text-[34px] text-white">Generate a <br />
                    <span className="text-[#019f55] border-b-4 border-[#019f55]">Random Password</span>
                </h1>
                <div className="w-full mt-[40px] mb-[30px] bg-white text-[#333] flex items-center justify-between py-[18px] px-[20px]">
                    <input
                        type="text"
                        id="password"
                        placeholder="Password"
                        className="border-0 outline-none"
                        value={generatedPassword}
                        disabled
                    />
                    <img
                        src={copied ? "/copied.png" : "/copy.png"}
                        alt={copied ? "copied" : "copy"}
                        className={copied? "w-7 h-7 p-1":"w-6 cursor-pointer"}
                        onClick={() => {
                            if (!copied) copyPassword()
                        }}
                    />
                </div>
                <button
                    onClick={() => {
                        setCopied(false)
                        setGeneratedPassword(createPassword())
                    }}
                    className="border-0 outline-none bg-[#019f55] text-white text-xl font-light flex items-center justify-center py-3 px-6 rounded-md cursor-pointer">
                    <img src="/generate.png" alt="generate" className="w-5 mr-3"
                    />
                    Generate Password
                </button>
            </div>
        </main>
    )
}

export default PasswordGenerator
