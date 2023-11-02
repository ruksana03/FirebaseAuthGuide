import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import bgImg3 from "../assets/scattered-forcefields.svg"
import Loader from "../components/Shared/Loader";
import SocialLogin from "./SocialLogin";


const Register = () => {

    const { createUser, loading } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        // get field values 
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const password = event.target.password.value;
        console.log(name, email, img, password);

        // validation 
        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            // toast.error('Password must be at least 6 characters');
            return;
        }

        // creating a new user
        createUser(email, password)
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => console.log(error))


    }


    return (
        <div>
            {loading ? <Loader /> : null}

            <div className="flex flex-col items-center lg:flex-row  gap-4 bg-[#EEF1F6]  w-full lg:justify-between lg:pr-28" >

                <div className=" w-full lg:w-1/2 lg:p-28 " style={{
                    backgroundImage: `url(${bgImg3})`,
                    backgroundSize: 'cover',

                }}>

                    <div className="text-lg text-center py-6">
                        <h1 className="text-2xl  py-4">Lorem ipsum dolor sit amet.</h1>
                        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad praesentium eius cumque doloribus dolor enim fugit? Voluptatem doloribus dolores soluta assumenda illum sit fugit.</p>
                    </div>

                    <div className="py-6 text-center">
                       <SocialLogin></SocialLogin>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 dark:bg-[#363739]">
                    <div className="text-center text-2xl font-semibold">
                        <h1 className="text-4xl my-2">Firebase Auth Guide</h1>
                        <p>Create An Account</p>
                    </div>
                    <div className="my-12 mx-8">
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <input type="text" placeholder="Full name" className="bg-white pl-4 py-3 text-lg" name='name' />

                            <input type="text" placeholder="email" className="bg-white pl-4 py-3 my-2 text-lg" name='email' />

                            <input type="text" placeholder="image url" className="bg-white pl-4 py-3 mb-2 text-lg" name='img' />

                            <input type="text" placeholder="password" className="bg-white pl-4 py-3 mb-2 text-lg" name='password' />

                            <div className=" flex gap-2 text-lg mt-2 mb-6">
                                <input type="checkbox" name="" id="" />
                                <h1> Remember me</h1>
                            </div>

                            <button className="py-3 bg-[#FFA637] rounded-sm text-lg text-white font-semibold" type='submit'>Register</button>

                            <div className="flex justify-between my-6 text-lg">
                                <h1>Have an account?</h1>
                                <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;