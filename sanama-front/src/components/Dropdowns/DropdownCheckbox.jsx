import { useEffect, useRef, useState } from "react"

const DropdownCheckbox = ({ statusList, statusState, setStatusState, text }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef(null)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const handleCheckboxChange = (id) => (event) => {
        const value = event.target.checked
        console.log(event.target.checked)
        setStatusState(prevState => (
            { ...prevState, [id]: value }
        ))
    }

    //Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [dropdownRef])


    return (
        <div ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                id="dropdownBgHoverButton"
                data-dropdown-toggle="dropdownBgHover"
                className="text-slate-900 bg-slate-50 hover:bg-slate-400 w-[200px] justify-between
                            border border-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 
                            font-normal rounded-lg text-sm px-5 py-4 text-center inline-flex items-center 
                            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                {text}
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            {showDropdown &&
                <div id="dropdownBgHover" className="z-10 w-48 bg-white absolute rounded-lg shadow dark:bg-gray-700">
                    <ul className="p-2 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                        {statusList.map((item) => (
                            <li key={item.idValue}>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                        id={item.idValue}
                                        type="checkbox"
                                        checked={statusState[item.idValue]}
                                        onChange={handleCheckboxChange(item.idValue)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                                                    dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 
                                                    focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor={item.idValue}
                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                                        {item.descripcion}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            }

        </div>
    )
}

export default DropdownCheckbox