import { useState } from "react";
import { BiCaretDown, BiCaretRight } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Manus from "./Menus";


const Dropdown = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 p-2 focus:outline-none"
                >
                    {isDropdownOpen ? <BiCaretRight /> : <BiCaretDown />}
                    <span><GiHamburgerMenu></GiHamburgerMenu></span>

                    {isDropdownOpen && (
                        <div className="absolute z-10 mt-2 left-10 top-10 w-48 bg-white text-black rounded-lg shadow-lg">
                            <ul className="py-2">
                                <Manus></Manus>
                            </ul>
                        </div>
                    )}
                </button>
                
            </div>
            
       
    );
};

export default Dropdown;