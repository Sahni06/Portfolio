import {  FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  //Smooth Scroll function
  const handleScroll =(sectionId) =>{
    const section = document.getElementById(sectionId)
    if(section.id){
section.scrollIntoView({ behavior: "smooth"})
    }
  }
  return (
    <footer className=' text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] '>
<div className='container mx-auto text-center'>
  <h2 className='text-xl font-semibold text-purple-500'>
    Sahni Kumari
  </h2>
{/*  */}
<nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
{[
{ name:'About', id:"about"},
{ name:'Skills', id:"skills"},
{ name:'Experience', id:"experience"},
{ name:'Projects', id:"work"},
{ name:'Education', id:"education"},
].map((item, index)=> (
  <button
  key={index}
  onClick={()=> handleScroll(item.id)}
  className='hover:text-purple-500 text-sm sm:text-base my-1'>
{item.name}
  </button>
))
}
</nav>
{/* Social Media Icons */}
<div className="flex flex-wrap justify-center space-x-4 mt-6">
{[
{icon: <FaLinkedin/>, link: "https://www.linkedin.com/in/sahni-k-857b97253/"},
{icon: <FaInstagram/>, link: "https://www.instagram.com/untidybloom?igsh=bGhvbTBua3ZlY3Uw"},
{icon: <FaTwitter/>, link: "#"},
].map((item, index)=>(
<a
key={index}
href={item.link}
rel='noopener noreferrer'
target="_blank"
className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110">
{item.icon}
</a>
))
}
</div>
{/* Copyright Text */}
<p className="text-sm text-gray-400 mt-6">
 &copy; 2025 Sahni. All rights reserved
</p>
</div>
    </footer>
  )
}

export default Footer
