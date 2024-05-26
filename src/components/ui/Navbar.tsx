import { Link,NavLink, useNavigate } from "react-router-dom"
import { CiLogin } from "react-icons/ci";
import Logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../interfaces/types";

export const Navbar = () => {
    const {user, dispatch} = useContext(AuthContext)
    
    const navigate = useNavigate();

    const handleLogout = ()=>{
        
        const action = {
            type:types.logout
        };
        dispatch(action)
        navigate('/login',{
            replace:true,
        })
    }

    return (
        <header className="fixed w-full left-0 top-0 z-40  text-gray-400 bg-gray-900 body-font shadow-cyan-500">
            <div className="w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img src={Logo} alt="LogoImage" className="w-10"/>
                    <Link to='/'>
                        <span className="ml-3 text-xl">Heroes App</span>
                    </Link>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to='/marvel'  className="mr-5 hover:text-white ">Marvel</NavLink>
                    <NavLink to='/dc' className="mr-5 hover:text-white">DC</NavLink>
                    <NavLink to='/search' className="mr-5 hover:text-white">Search</NavLink>
                </nav>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <button>
                        <NavLink to='/login' className='text-cyan-400'>
                            {user.name}
                        </NavLink>
                    </button>
                    <button 
                        className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-gray-200 rounded text-2xl md:mt-0"
                        onClick={handleLogout}
                    >
                        <CiLogin />
                    </button>
                </nav> 
            </div>
        </header>
    )
}