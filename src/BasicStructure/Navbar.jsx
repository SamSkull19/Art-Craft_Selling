import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="roboto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>All Art & craft Items</Link></li>
                            <li><Link to='/'>Add Craft Item</Link></li>
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
                        <li><Link to='/'>All Art & craft Items</Link></li>
                        <li><Link to='/'>Add Craft Item</Link></li>
                        <li><Link to='/'>My Art&Craft List</Link></li>
                        {/* {
                            user && <>
                                <li><Link to='/profile'>Profile</Link></li>
                            </>
                        } */}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full">
                                    <img alt="" src="" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-20 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a>Samin</a>
                                </li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div>
                        {
                            user ? <div className="flex gap-2">

                                <button className="btn btn-active btn-ghost text-sm px-4 font-medium ml-2"> Logout </button>
                            </div> :
                                <button className="btn btn-active btn-ghost text-sm px-4 font-medium"> <Link to='/login'>Login</Link> </button>
                        }
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Navbar;