import { heroes } from "../data/heroes"

export const getHeroesByID = (id) =>{
    
    return heroes.find(heros => heros.id === id);
}