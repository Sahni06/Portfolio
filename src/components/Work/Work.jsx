import { useState } from "react"
import {projects } from "../../constants"

const Work = () => {
  const[selectedProject, setselectedProject] = useState(null)
  const handleOpenModal =(projects)=>{
    setselectedProject(projects)
  };
  const handleCloseModal = (projects) => {
    setselectedProject(null)
  }
  return (
  <section
  id="work"
  className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative ">
{/* Section title */}
<div className="text-center mb-16 ">
  <h2 className="text-white text-4xl font-bold">
    PROJECTS
  </h2>
  <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
<p className="text-gray-400 mt-4 text-lg font-semibold">A showcase of the projects I have worked on, highlightening my skills and experience in various technolofies</p>
</div>
{/* Project Grid */}
<div className="grid gap-30 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {projects.map((project)=>(
    <div 
    key={project.id}
    onClick={()=> handleOpenModal(project)}
    className="w-65  border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50
    hover:translate-y-2 transition-transform duration-300">
      <div className="p-4"> 
       <img src={project.image} alt={project.title} className="w-full h-35 object-cover rounded-xl"/>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-500 mb-4 pt-5 line-clamp-4">
        {project.description}
      </p>
      <div>
        {project.tags.map((tags, index )=>(
          <span key={index}
          className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2">
            {tags}
          </span>
        ))}
      </div>
    </div>
    </div>
  ))}
</div>
{/* Modal Container */}
{selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-20 " >
    <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-100 lg:h-140 w-[100%] max-w-3xl overflow-hidden relative ">
      <div className="flex justify-end p-1">
        <button
        onClick={handleCloseModal}
        className="text-white text-3xl font-bold hover:text-purple-500">
&times;
        </button>
      </div>
      <div className="flex flex-col">
        <div className=" flex w-full justify-center bg-gray-900 px-10 lg:mt-[-5] ">
<img src={selectedProject.image} alt={selectedProject.title} className="lg:w-full lg:h-40 w-[95%] object-contain rounded-10xl shadow-2xl" />
       </div>
        <div className="lg:p-8 p-6">
        <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
{selectedProject.title}
        </h3>
      <p className="text-gray-400 mb-6 lg:text-base text-xs">
        {selectedProject.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
{selectedProject.tags.map((tag, index)=>(
 < span
 key={index}
 className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 ">
 {tag}
 </span>
))}
      </div> 
      <div className="flex gap-4">
<a href={selectedProject.github} target="_blank" rel='noopener noreferrer'
className="w-1/2 bg-gray-800 hover:bg-purple-950 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center">
  View Code
</a>
<a href={selectedProject.webapp} target="_blank" rel='noopener noreferrer'
className="w-1/2 bg-purple-700 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center">
  View Live
</a>
      </div>
        </div>
      </div>
    </div>
  </div>
)}
  </section>
  )
}

export default Work
