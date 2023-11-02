import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Navbar from "../components/Navbar";
import Loader from "../components/Shared/Loader";


const ErrorPage = () => {
    const { loading } = useAuth();
    return (
        <div className="bg-[#EEF1F6] dark:bg-[#1d2530]">
            <Navbar></Navbar>
            <div>
                {loading ? <Loader /> : null}
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-2xl dark:text-white"> error404</h1>
                <Link
                    className="border-2 px-4 py-2 w-1/2 my-8 rounded-sm dark:text-white"
                    to='/'>
                    Back to home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;