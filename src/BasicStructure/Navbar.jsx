import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Logged Out');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="roboto">
            <div className="navbar bg-stone-400 bg-opacity-0 py-5">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow rounded-box w-52 bg-stone-400 bg-opacity-80">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/allCraftItems'>All Art & craft Items</Link></li>
                            <li><Link to='/addCraftItems'>Add Craft Item</Link></li>
                            <li><Link to='/'>My Art&Craft List</Link></li>
                            {/* {
                                user && <>
                                    <li><Link to='/profile'>Profile</Link></li>
                                </>
                            } */}

                        </ul>
                    </div>
                    <a className="text-2xl font-extrabold flex items-center animate__animated animate__rubberBand">NeffRoxx Crafts</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allCraftItems'>All Art & Craft Items</Link></li>
                        <li><Link to='/addCraftItems'>Add Craft Item</Link></li>
                        <li><Link to='/'>My Art & Craft List</Link></li>
                        {
                            // user && <>
                            //     <li><Link to='/profile'>Profile</Link></li>
                            // </>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user ?
                                <div className="flex gap-2">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt='...' src={user && user.photoURL} />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="mt-3 z-20 p-2 shadow menu menu-sm dropdown-content rounded-box w-52 bg-stone-400 bg-opacity-80">
                                            <li>
                                                <a>{user && user.displayName}</a>
                                            </li>
                                            <li>
                                                <a onClick={handleLogOut}>Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <button onClick={handleLogOut} className="btn btn-active btn-neutral text-sm px-4 font-medium ml-2 w-20"> Logout </button>
                                </div>
                                :
                                <div>
                                    <button className="btn btn-active btn-neutral text-sm px-4 font-medium w-20"> <Link to='/login'>Login</Link> </button>
                                    <button className="btn btn-active btn-neutral text-sm px-4 font-medium w-20 ml-4"> <Link to='/register'>Register</Link> </button>
                                </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;