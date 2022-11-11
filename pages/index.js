import Head from 'next/head'
import Image from "next/image";
import nameIcon from '../public/nameIcon.png';
//simport {CgDarkMode} from "react-icons/cg";
import {HiDownload} from "react-icons/hi";
import {TbArrowLoopRight} from "react-icons/tb";
import {AiOutlineTwitter, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fatemah| INFO</title>
        <meta name="description" content="Fatemah's Portfolio" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className=' bg-neutral-200 text-gray-800'>
        <div className='p-12 max-w-md mx-auto sm:max-w-2xl sm:pb-24 lg:max-w-4xl lg:pb-36 xl:max-w-6xl xl:pb-52'>

          <nav className='flex items-center justify-center gap-8 sm:justify-end border border-b-white'>
            <ul className='flex gap-6 text-xl font-burtons'>
              <li className='line-through'>
                info
              </li>
              <li className='text-gray-800/50'>
                  projects<sup className=' text-xs text-red-800/50 tracking-tighter'>soon</sup>   
              </li>
              <li className='cursor-pointer '> 
                <a href='https://drive.google.com/file/d/1ifNEc3qdWC4Ra4C62yVFBXljEsWWF2C3/view?usp=sharing' target={'_blank'}>
                  resume <HiDownload className={'inline'} />
                </a> 
              </li>
            </ul>
            { /** <CgDarkMode className={"cursor-pointer text-xl"}/> **/}
          </nav>

          <section className=' mt-12 space-y-3 font-courier sm:mt-20'>
            <div className='flex gap-2 items-center'>
              <h3 className='text-xl sm:text-2xl'>Hi there! I'm </h3>
              <Image src={nameIcon} className={" w-24 sm:w-28"} />
            </div>
            <h2 className='text-3xl font-burtons sm:text-4xl lg:text-4xl xl:text-4xl'> A Full-Stack JavaScript Developer.</h2>
            <div className='text-base pt-4 leading-7 text-center sm:text-lg space-y-3'>
              <p> 
              My focus is on the Front-end side, using HTML, CSS, Bootstrap, JavaScript, and React.js. I also have experience with Node.js, Express.js, MongoDB, Heroku, and Git in the Back-end.
              Besides, I am passionate about analysis using Microsoft Excel, Alteryx, and Tableau programs. Design creativity in branding, logos, and websites. 
              Using Photoshop and Illustrator programs.
              </p>
              <p className='text-xs sm:text-sm'>
              In my free time, you'll find me reading history, psychology or self-help books. Drawing with charcoal. 
              At gym or walking. Listening to my favorite music or watching an anime.
              </p>  
            </div>
            <div className='text-lg pt-4 text-cyan-600 lg:text-center xl:text-center'>
                <TbArrowLoopRight className={'inline'} />
                <a href="mailto:f.thenyan@gmail.com"> let's keep in touch</a>
            </div>
          </section>

        </div>
      </main>

      <footer className='flex justify-center gap-24 text-xl py-3 lg:gap-32 xl:gap-40'>
        <a href={'https://twitter.com/Fatemah____'} target={'_blank'}>
          <AiOutlineTwitter />
        </a>
        <a href={'https://www.linkedin.com/in/fatemah-althenyan/'} target={'_blank'}>
          <AiFillLinkedin />
        </a>
        <a href={'https://github.com/Fatemah-92'} target={'_blank'}>
          <AiFillGithub />
        </a>
      </footer>
    </div>
  )
}
