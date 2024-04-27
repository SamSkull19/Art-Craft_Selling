
import { FaGoogle } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import loginImg from "../assets/loginPic.jpg";


const Login = () => {


    return (
        <div className="bg-stone-300  p-10 mx-auto rounded-2xl mt-10 mb-16 flex flex-col-reverse md:flex md:flex-row justify-evenly items-center gap-5">

            <div>
                <img src={loginImg} alt="..." className="w-[300px] md:w-[620px] rounded-lg mt-5 brightness-50" />
            </div>

            <div className="bg-cyan-800 p-7 rounded-2xl">
                <form>
                    <label className="input input-bordered flex items-center gap-2 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email" name="email" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" name="password" className="grow" placeholder="Password" />
                    </label>

                    <input className="btn btn-active w-full text-lg" type="submit" value="Login" />

                    <div className="flex justify-between items-center mt-5">
                        <p className="text-sm  p-2 rounded-xl text-white font-medium"><Link to='/register'>Register Now</Link></p>
                        <p className="text-sm p-2 rounded-xl text-white font-medium"><Link>Forget Password</Link></p>
                    </div>

                </form>
                <div className="mt-5">
                    <button className="flex items-center bg-blue-500 text-white justify-center p-2 rounded-lg w-full"><FaGoogle className="mr-3" /> Login With Google</button>
                    <button className="flex items-center bg-slate-500 text-white justify-center p-2 rounded-lg mt-5 w-full"><FaSquareGithub className="mr-3" /> Login With Github</button>

                </div>
            </div>



        </div>
    );
};

export default Login;