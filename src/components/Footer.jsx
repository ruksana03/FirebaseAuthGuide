import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin, AiFillGithub,AiOutlineSearch } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="bg-black text-white text-center pt-6">
            <div className="py-3">
                logo
            </div>

            <div className="flex justify-center">
                <input type="search" name="" id="" className="py-2" />
                <button className="bg-[#FFA637] text-black p-2 hover:text-2xl"><AiOutlineSearch></AiOutlineSearch></button>
            </div>

            <div className=" flex gap-2 justify-center py-4 text-2xl">
                <a href=""><AiFillFacebook></AiFillFacebook></a>
                <a href=""><AiFillTwitterSquare></AiFillTwitterSquare></a>
                <a href=""><AiFillInstagram></AiFillInstagram></a>
                <a href=""><AiFillLinkedin></AiFillLinkedin></a>
                <a href=""><AiFillGithub></AiFillGithub></a>

            </div>
            <p>Copyright © 2023 - All right reserved by Firebase Auth Guide Author</p>
        </div>
    );
};

export default Footer;