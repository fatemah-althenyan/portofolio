import Head from 'next/head'
import Image from "next/image";

import { useState } from 'react';

import nameIcon from '../public/nameIcon.png';

import {CgDarkMode} from "react-icons/cg";
import {HiDownload} from "react-icons/hi";
import {TbArrowLoopRight} from "react-icons/tb";
import {AiOutlineTwitter, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Fatemah| INFO</title>
        <meta name="description" content="Fatemah's Portfolio" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className=' bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100'>
        <div className='p-12 max-w-md mx-auto sm:max-w-2xl lg:max-w-4xl lg:pb-32 xl:max-w-6xl xl:pb-44'>
          
          {/*PART #1: navigation bar of pages and dark mode feature.*/}
          <nav className='flex items-center justify-between border border-x-0 border-t-0 border-neutral-700 dark:border-b-white'>
            <div className='cursor-pointer'>
              <CgDarkMode onClick={()=> setDarkMode(!darkMode)}/>
            </div>
            <ul className='flex gap-6 text-lg font-burtons'>
              <li className='line-through cursor-pointer'>
                info
              </li> {/*show line-through for current page*/}
              <li className='text-gray-800/50 dark:text-gray-200/50'>
                  projects<sup className=' text-xs tracking-tighter text-red-800/50 dark:text-red-400/50'>soon</sup>   
              </li>
              <li className='group relative'> {/*show the resume in two versions*/}
                <span className='cursor-pointer'> resume<HiDownload className={'inline text-base'} /> </span>
                <div className='invisible group-hover:visible absolute'>
                  <ul className='bg-white bg-opacity-50 dark:bg-opacity-20 font-serif text-xs text-center'>
                    <li className='hover:bg-neutral-400/50 px-2 py-1'> <a href='https://drive.google.com/file/d/1ndkyNm43CJonM7LmEkp5zopQh29PHpDJ/view?usp=sharing' target={'_blank'}>English</a> </li>
                    <li className='hover:bg-neutral-400/50 px-2 py-1'> <a href='https://drive.google.com/file/d/11330XbL6Crl4HsrK4-P7MwunBRS9VaYG/view?usp=sharing' target={'_blank'}>العربية</a> </li>
                  </ul>
                </div>    
              </li>

            </ul>
          </nav>

          {/*PART #2: the body of name, role, paragraphs, and contact.*/}
          <section className=' mt-12 space-y-3 font-courier sm:mt-20'>
            <div className='flex gap-2 items-center'>
              <h3 className='text-xl sm:text-2xl'>Hi there! I'm </h3>
              <Image src={nameIcon} className={" w-24 sm:w-28"} />
            </div>
            <h2 className='text-2xl font-burtons sm:text-4xl'> A Full-Stack Developer.</h2>
            <div className='text-base pt-4 leading-7 text-center space-y-3 sm:text-lg'>
              <p> 
              My focus is on the Front-end side, using HTML, CSS, Bootstrap, JavaScript, and React.js. 
              I also have experience with Node.js, Express.js, MongoDB, Heroku, and Git in the Back-end.
              <br />
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
                <a href="mailto:f.thenyan@gmail.com">let's keep in touch..</a>
            </div>
          </section>

        </div>
      </main>

      {/*PART #3: social media accounts: twitter, linkedin, and github.*/}
      <footer className='flex justify-center gap-24 text-lg text-neutral-700 py-3 lg:gap-32 xl:gap-40'>
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
