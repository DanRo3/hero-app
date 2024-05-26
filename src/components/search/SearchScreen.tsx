
import useForm from "../../hooks/useForm"
import HeroCard from "../hero/HeroCard";
import { hero } from "../../interfaces/types";
import { getHeroesByName } from "../../selectors/getHeroByName";
import { useState } from "react";
import Loading from "./Loading";

interface formData{
  searchText:string;
}

const SearchScreen = () => {
  
  const {formulario, handleChange} = useForm<formData>({ searchText: "" })

  const  {searchText} = formulario;

  const [herosF ,setHeroF] = useState('')

  const herosFiltered:hero[] | undefined = getHeroesByName(herosF);
  
  const handleSearch= (e)=>{
      e.preventDefault();
      setHeroF(searchText)
  }


  return (
    <div className="flex flex-col items-center justify-center p-5 lg:mt-3 mt-36">

        <form className="flex" onSubmit={handleSearch}>
          <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
            <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
              <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path> 
            </svg>
          </div>
          <input 
              type="text" 
              className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0" 
              placeholder="Search your hero" 
              name="searchText"
              value={searchText}
              onChange={handleChange}
              autoComplete="off"/>
          <input 
              type="submit" 
              value="Search"
              onClick={handleSearch} 
              className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
        </form>

        <div className="flex flex-wrap gap-2 content-center justify-center animate__animated animate__fadeIn mt-4">
            {herosFiltered ? herosFiltered.map(hero => (
                      <HeroCard 
                          key={hero.id}
                          heros={hero}/>
            )):
            <div className="flex flex-col gap-3 justify-center content-center">
                <Loading/>
            </div> } 
        </div>
    </div>
  )
}


export default SearchScreen