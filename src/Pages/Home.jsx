import useAuth from "../Hooks/useAuth";
import Loader from "../components/Shared/Loader";
import Login from "./Login";



const Home = () => {
    const { loading } = useAuth();
    return (
        <div>
            <div>
            {loading ? <Loader /> : null}
            </div>
            <Login></Login>
        </div>
    );
};

export default Home;