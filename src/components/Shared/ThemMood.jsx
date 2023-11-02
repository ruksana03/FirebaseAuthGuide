import { useState } from "react";
import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";

const ThemMood = () => {

    const [isDark, setIsDark] = useState(false);

    if (isDark) {
        document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
        document.querySelector("body").setAttribute("data-theme", "light");
    }

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark", !isDark); // Toggle the "dark" class on html or body element
    };

    return (
        <div className={`${isDark ? 'dark' : ''} flex items-center justify-center`}>
            <button
                onClick={toggleTheme}
  >
            {isDark ? <PiToggleRightFill className="text-2xl text-gray-700"></PiToggleRightFill> : <PiToggleLeftFill className="text-2xl text-white"></PiToggleLeftFill>}
        </button>
</div >

    );
};

export default ThemMood;