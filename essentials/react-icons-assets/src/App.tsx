import { IoIosSave } from 'react-icons/io';
import image from './assets/image.jpeg';

const App = () => {
    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center">
                {/* It works - from public folder */}
                <img src='/image.jpeg' alt='Photo' className="w-1/3 mb-2" />

                <img
                    src={image}
                    alt="Photo"
                    className="w-1/3 mb-2"
                />

                <button className="bg-gray-900 text-gray-300 px-8 py-3 rounded-xl text-xl">
                    <span className="flex gap-3 items-center">
                        <IoIosSave className="text-3xl text-yellow-300" />
                        Save
                    </span>
                </button>
            </div>
        </>
    )
}

export default App
