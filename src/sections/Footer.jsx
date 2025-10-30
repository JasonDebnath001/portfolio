import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='flex flex-col justify-center md:items-start items-center'>
            {/* Updated link to download resume.pdf */}
            <a href="/resume.pdf" download="resume.pdf">
              My Resume
            </a>
        </div>
        <div className='socials'>
            {socialImgs.map((img) => (
                <a href={img.url} className='icon' target='_blank' key={img.url}>
                    <img src={img.imgPath} alt={img.name} />
                </a>
            ))}
        </div>
        <div className='flex flex-col justify-center'>
            <p className='text-center md:text-end'>
                &copy; {new Date().getFullYear()} Aritra Debnath | All rights reserved
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
