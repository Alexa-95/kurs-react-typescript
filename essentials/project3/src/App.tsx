import { useState } from "react"
import AlertComponent from "./components/AlertComponent";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gray-200">
                <AlertComponent showAlert={isOpen} title="Atention Please!" copy="React and Typescript is cool!"/>
                <button
                    className="bg-gray-700 text-white uppercase text-sm font-medium rounded-xl px-6 py-2 shadow-xl hover:bg-gray-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Show Alert
                </button>
            </div>
        </>
    )
}

export default App
