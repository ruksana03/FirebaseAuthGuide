import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import Loader from "../components/Shared/Loader";


const Profile = () => {
    const { user, logOut, loading } = useAuth();

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        if (selectedFile) {
            // Here, you can implement the logic to upload the selected file to a server or process it as needed.
            console.log('Selected File:', selectedFile);
        } else {
            console.log('No file selected.');
        }
    };
    return (
        <div>
            {loading ? <Loader /> : null}
            {
                user?.email ?
                    <div className="flex flex-col justify-center items-center">
                        <img className=" w-10 rounded-full" src={user.photoURL} alt={user.displayName} />
                        <div>
                            <input type="file" onChange={handleFileChange} />
                            <button onClick={handleUpload}>Upload</button>
                        </div>
                        <h1>{user.displayName}</h1>
                        <button
                            className="border-2 px-4 py-2 rounded-lg"
                            onClick={logOut}>
                            Logout
                        </button>
                    </div>
                    :
                    <Link to='/login'>
                        <button
                            className="border-2 px-4 py-2 rounded-md">
                            Login
                        </button>
                    </Link>
            }




        </div>
    );
};

export default Profile;