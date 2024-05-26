import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesByID } from "../../selectors/getHeroById";
import { useMemo } from "react";

const HeroScreen = () => {
    
    const navigate = useNavigate();
    
    const {heroeId} = useParams();
    
    const hero = useMemo(()=>getHeroesByID(heroeId), [heroeId]) 
    
    
    if(!hero){
        return <Navigate to='/'/>
    }
    
    const imageHero = `/public/assets/${hero.id}.jpg`;
    
    const handleReturn = ()=>{
        navigate(-1);
    }
    
    return (
        <div className=" w-full h-screen flex lg:flex-row flex-col lg:mt-3 mt-52">
            <div className="container flex px-5 md:flex-row flex-col ">
                <div className=" lg:w-1/2 lg:h-4/5 w-full h-full animate__animated animate__bounceInLeft">
                    <img className="w-full h-full rounded" alt="hero" src={imageHero} />
                </div>
                <div className="flex flex-col w-full h-4/5 text-left">
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{hero.superhero}</h1>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h2 className="text-xl">Alter ego: </h2>
                        <p className="mb-8 leading-relaxed">{hero.alter_ego}</p>
                        <h2 className="text-xl">Publisher: </h2>
                        <p className="mb-8 leading-relaxed">{hero.publisher}</p>
                        <h2 className="text-xl">First appearance: </h2>
                        <p className="mb-8 leading-relaxed">{hero.first_appearance}</p>
                        <h2 className="text-xl">Characters: </h2>
                        <p className="mb-8 leading-relaxed">{hero.characters}</p>
                        <button  
                            className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-zinc-950 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#A12347] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={handleReturn}>
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroScreen;
