import { useNavigate } from "react-router-dom"
import { types } from "../../interfaces/types"
import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";


const LoguinScreen = () => {

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext);
    
    const handleLogin = ()=>{
        const action = {
            type:types.loguin,
            payload:{name:'DanRo'}
        }
        dispatch(action)
        const lastPath = localStorage.getItem('lastPath') || '/marvel';
        navigate(lastPath,{
            replace:true,
        })
    }
    return (
        <div className="w-screen">
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                    <div className="shadow-three mx-auto max-w-[500px] mt-16 rounded bg-gray-300 px-6 py-10 dark:bg-dark sm:p-[60px]">
                        <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                            Heroes App
                        </h3>
                        <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                            Iniciar sesión
                        </h3>
                        <div className="mb-8 flex items-center justify-center">
                            <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
                            <p className="w-full px-5 text-center text-base font-medium text-body-color">
                                Inicia sesión con tu correo
                            </p>
                            <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
                        </div>
                        <form>
                            <div className="mb-8">
                                <label
                                    htmlFor="email"
                                    className="mb-3 block text-sm text-dark dark:text-white"
                                >
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Introduce tu correo"
                                    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                                />
                            </div>
                            <div className="mb-8">
                                <label
                                    htmlFor="password"
                                    className="mb-3 block text-sm text-dark dark:text-white"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="Introduce tu contraseña"
                                    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                                />
                            </div>
                            <div className="mb-6">
                                <button
                                    className="flex w-full items-center justify-center rounded-sm bg-slate-900 px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                                    type="submit"
                                    onClick={handleLogin}>
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoguinScreen
