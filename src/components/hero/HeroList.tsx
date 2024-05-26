import { useMemo } from "react";
import { hero } from "../../interfaces/types"
import { getHeroesByPublisher } from "../../selectors/getHeroByPublisher"
import HeroCard from "./HeroCard";

interface propsHero  {
    publisher:string,
}

const HeroList = (propsHero:propsHero) => {
    const {publisher} = propsHero
    
    const heroes:hero[] = useMemo(()=>getHeroesByPublisher(publisher),[publisher] );

    return (
        <div className="flex flex-wrap gap-2 content-center justify-center lg:mt-3 mt-40 animate__animated animate__fadeIn">
            {heroes.map(hero=>(
                <HeroCard 
                    key={hero.id}
                    heros={hero}
                />
            ))}
        </div>
    )
}

export default HeroList;
