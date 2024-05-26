import { heroes } from "../data/heroes"
import { hero } from "../interfaces/types";

export const getHeroesByPublisher = (publisher:string):hero[]=>{
    const validPublishers:string[] = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not valid publisher`)
    }
    return heroes.filter(hero => hero.publisher ===publisher);
}