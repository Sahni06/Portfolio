import {Typewriter} from 'react-simple-typewriter';
const About = () => {
  return (
    <section 
    id="about"
    className= 'py-4 px-[4vw] md:px-[7vw] lg:px-[8vw] font-snas mt-16 md:mt-24 lg:mt-32'>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center ">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
{/* greeting */}
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
Hi, I am
</h1>
{/* Name */}
<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight "> 
 Sahni Kumari
</h2>
{/* Skills heading with typing effect */}
<h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
<span className="text-white">
I am a {" "}
</span>
<Typewriter
 words={[
  'Frontend Developer',
   'UI/UX Designer']}
   loop={5}
typeSpeed={100}
deleteSpeed={50}
delaySpeed={500}
eraseDelay={2000}
  cursorRenderer={(cursor)=>(
    <span className="text-[#8245ec]">{cursor}</span>
  )}

></Typewriter>
</h3>
<p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
  I’m a frontend web developer with strong 
  expertise in React.js, dedicated to building 
  responsive, efficient, and visually engaging
   web applications. I focus on clean code, 
   intuitive UI/UX, and modern design practices. 
   I enjoy solving real-world problems through 
   code and continuously learning to stay 
   updated with the latest web technologies.

</p>
{/* Resume Button */}
<a href="https://drive.google.com/file/d/1NMJIdSlOodvwkZTT9iRFWqtxHtRCWrNk/view?usp=sharing"
target='_blank'
rel='noopener noreferrer'
className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold hover:scale-105 hover:shadow-lg transition duration-300' 
style={{
  background: 'linear-gradient(90deg, #8245ec, #a855f7)',
  boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
}}>
  DOWNLOAD CV
</a>
        </div>
{/* Right Side */}
<div className='md: w-1/2 flex justify-center md:justify-end'>
    <img src="/profile.jpg" alt="Sahni Kumari"
    className='w-100 h-100 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
     />
</div>
      </div>
    </section>
  )
}

export default About

