
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { AiFillGoogleCircle, AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import Loader from "../components/Shared/Loader";



const SocialLogin = () => {

    const { googleLogin, loading } = useAuth();

    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your social login successfully saved',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'some error happen in social side',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })
    }

    return (
        <div>
              {loading ? <Loader /> : null}

            <div className="text-xl font-bold">continue with</div>
            <div className=" flex gap-4 justify-center py-4 text-4xl">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className=" px-4 py-2 "><AiFillGoogleCircle className="text-[#900431]"></AiFillGoogleCircle></button>
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className=" px-4 py-2 "><AiFillGithub className="text-[#FF5A39]"></AiFillGithub></button>
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className=" px-4 py-2 "><AiFillLinkedin className="text-[#FF991D]"></AiFillLinkedin></button>
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className=" px-4 py-2 "><AiOutlineMail className="text-[#FECE00]"></AiOutlineMail></button>
            </div>
        </div>
    );
};

export default SocialLogin;