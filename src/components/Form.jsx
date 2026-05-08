import React, { useState } from "react";

function Form({ Project }){
    const [title, setTitle] = useState("")
    const [description, setdescription] = useState("")
    const [TitleError, setTitleError] =useState("")
    const[DescriptionError, setDescriptionError] =useState("")
    function handleSubmit(e){  //Checks if Both Title and Description are added
        e.preventDefault()
        let valid= true
        if(!title.trim()){
         setTitleError("The Title is Missing")
         valid= false
        } 
        else{setTitleError("")}
        if(!description.trim()){
         setDescriptionError("The Description is Missing")
         valid= false
        }
        else{setDescriptionError("")}
        if(!valid) return;
    Project({title, description})
    setTitle("")
    setdescription("")
}
    return (
        <div className="border border-gray-300 rounded-lg p-4 m-4">
        <h1 className="font-bold text-x1 mb-4">Add Project</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">

            <label className="=text-sm">Title</label>
            <input placeholder="Add Title" className="border border-gray-300 rounded p-2"
            value={title} onChange={(e) =>setTitle(e.target.value)}></input>
            {TitleError && <p className="text-red-500 text-xs">{TitleError}</p>}

            <label>Description</label>
            <textarea placeholder= "Add Description" className="border border-gray-300 rounded p-2 min-h-24 resize-y"
            value={description} onChange={(e) => setdescription(e.target.value)}
            onInput={(e) => {e.target.style.height= "auto"; e.target.style.height= e.target.scrollHeight + "px" //Causes the text area to automatically enlarge witg input
            }}
            ></textarea>
            {DescriptionError && <p className="text-red-500 text-xs">{DescriptionError}</p>}

            <button className="border border-gray-300 rounded px-4 py-1 w-16 hover:bg-gray-100"
            type="submit">Add</button>
        </form>
        </div>
    )
}

export default Form