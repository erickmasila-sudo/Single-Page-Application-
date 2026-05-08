import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Lists from './components/Lists'


function App(){
  const [projects, setProjects]= useState(() => {
    const saved= localStorage.getItem("projects")
    return saved ? JSON.parse(saved) : []
  })
  useEffect(()=>{
    localStorage.setItem("projects", JSON.stringify(projects))
  }, [projects])
  {/*Function for adding */ }
  function handleAdd(project) {
    setProjects([...projects, project])
  }
  {/*Function to remove a project from the list*/ }
  function handleRemove(index) {
    setProjects(projects.filter((_, i) => i !== index))
  }

  return (
    <div className='bg-gray-800 min-h-screen p-4 md:p-8'>
    <div className='bg-white w-full md:max-w-8xl md:mx-auto rounded-lg overflow-hidden md:min-h-200'>
    <Header/>
    <div className='md:flex'>
      <div className='md:w-1/2 md:border-r border-gray-200'>
    <Form Project={handleAdd}/>
    </div>
    <div className='md:w-1/2'>
    <Lists projects={projects} onRemove={handleRemove}/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default App
