import { Link } from "react-router-dom";


const Menus = () => {
    const links = ['login', 'register','profile'];
    const menuNames = ['Login', 'Register','Your Profile'];
    return (
        <div className="flex flex-col lg:flex-row lg:gap-4">
            {
                links.map((link,index) => 
                <li key={link}>
                    <Link to={`/${link}`}>{menuNames[index]}</Link>
                </li>)
            }
        </div>
    )
}


export default Menus;