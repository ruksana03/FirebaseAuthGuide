import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { BiCaretDown, BiCaretRight } from "react-icons/bi";


const ProfileButton = () => {
    const { user, logOut } = useAuth();

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
                <img className="w-10 rounded-full" src={user.photoURL} alt={user.displayName} />

                {isDropdownOpen && (
                    <div className="absolute z-10 mt-2 right-10 top-10 w-48 bg-white text-black rounded-lg shadow-lg">
                        <ul className="py-2">
                            <li>
                                <button className="">{user.displayName}</button>

                            </li>
                            <li>
                                <button className="" onClick={logOut}>Logout</button>

                            </li>
                        </ul>
                    </div>
                )}
            </button>

        </div>

    );
};

export default ProfileButton;