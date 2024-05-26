import { heroes } from "../data/heroes"
import { hero } from "../interfaces/types";

export const getHeroesByName = (name:string = ''):hero[] | undefined =>{
    name = name.toLocaleLowerCase();
    const heros = heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
    if(name===''){
        return undefined 
    }else if(heros.length===0){
        return undefined
    }
    return heros
}