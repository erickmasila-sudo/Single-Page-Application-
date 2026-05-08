import { useState } from "react"
import SearchBar from "./SearchBar";

function Lists({ projects, onRemove}){
    const [searchTerm, setSearhTerm]= useState("")
    const filteredProjects = projects
    .filter((project) => project.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return(
        <div className="border border-gray-300 rounded-lg p-4 m-4">
        <SearchBar searchTerm={searchTerm} onSearch={setSearhTerm}/>
        {filteredProjects.map((project, index) =>
        <div key ={index} className="flex items-center gap-3 border-b border-gray-200 py-2">
            <button onClick={() => onRemove(index)}
                className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center text-gray-400 hover:bg-red-100 hover:text-red-500 shrink-0 self-center"
            >X</button>
            <div>
            <h3 className="font-bold">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.description}</p>
            </div>
        </div>
        
        )}
        </div>
    )
}
export default Lists