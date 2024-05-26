import { FaArrowRight } from "react-icons/fa";
import { hero } from "../../interfaces/types"
import { Link } from "react-router-dom";


interface propsCard{
    heros:hero
}

const HeroCard = ({heros}:propsCard) => {
    const {id,superhero,alter_ego,characters} = heros;
    return (
        <div className="bg-slate-500 mb-1 rounded-md overflow-hidden flex flex-row h-[200px] w-[300px] border-gray-100 border-2 shadow-sm">
            <div className="w-1/2 h-full">
                <img src={`/public/assets/${id}.jpg`} alt="heroImage" className="w-full h-full"/>
            </div>
            <div className="w-1/2 h-full flex flex-col p-2 text-left justify-between">
                <h3 className="text-gray-50 text-lg">{superhero}</h3>
                <div className="text-[14px]">
                    <p className="text-red-900">Alter ego:</p>
                    <p>{alter_ego}</p>
                    <p className="text-red-900">Personaje</p>
                    <p className="text-nowrap truncate">{characters}</p>
                </div>
                <div className="flex justify-end content-center fl w-full text-white hover:text-red-950 self-end">
                    <Link to={`/hero/${id}`}>
                        Más...
                    </Link>
                    <FaArrowRight className="mt-1"/>
                </div>
            </div>
        </div>
    )
}

export default HeroCard
