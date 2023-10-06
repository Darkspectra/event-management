import { Link, NavLink } from "react-router-dom";
import userDefault from "../../assets/user.jpg"

const NavBar = () => {
    const links = <>
        <li className="font-bold text-3xl"><NavLink to="/">Home</NavLink></li>
        <li className="font-bold text-3xl mx-6"><NavLink to="/photo">Photos</NavLink></li>
        <li className="font-bold text-3xl mr-6"><NavLink to="/cake">Wedding Cake</NavLink></li>
        <li className="font-bold text-3xl"><NavLink to="/card">Wedding Card</NavLink></li>
    </>

    // const { user, logOut } = useContext(AuthContext);
    // const handleSignOut = () => {
    //     logOut()
    //         .then()
    //         .catch()
    // }
    return (
        <div>
            <div className="flex mx-auto items-center justify-between">
                <div>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="">
                    <Link to="/login">
                        <button className="btn font-bold text-4xl items-center mx-auto">Login</button>
                    </Link>
                </div>
            </div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar mt-8">
                <div className="w-28 rounded-full">
                    <img className="mx-auto items-center" src={userDefault} />
                </div>
            </label>
            <div>
                {/* {
                    user ?
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                } */}
            </div>
        </div>
    );
};

export default NavBar;