import { Link } from "react-router-dom";
import ProfileButton from "./NavComponents/ProfileButton";
import Dropdown from "./NavComponents/Dropdown";
import Manus from "./NavComponents/Menus";
import useAuth from "../Hooks/useAuth";
import ThemMood from "./Shared/ThemMood";




const Navbar = () => {

    const { user } = useAuth();
    return (
        <div className="flex justify-between gap-4 bg-black text-white py-4 text-lg px-16">
            <div className="relative flex justify-between items-center">
                <div className="lg:hidden">
                    <Dropdown></Dropdown>
                </div>
                <div className="hidden lg:flex lg:gap-2">
                    <Link to="/">logo-lg</Link>
                    <ThemMood></ThemMood>
                </div>
            </div>
            <div className="hidden lg:block">
                <div>
                    <ul className="flex">
                        <Manus></Manus>
                    </ul>
                </div>

            </div>
            <div className="flex gap-2 lg:hidden">
                <Link to="/">logo-sm</Link>
                <ThemMood></ThemMood>
            </div>
            <div className="hidden lg:block">
                {
                    user?.email ? <div>
                        <Link to="/"><ProfileButton></ProfileButton></Link>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="border-2 px-4 py-2 rounded-lg"

                            >Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;