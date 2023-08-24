import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGitAlt } from '@fortawesome/free-brands-svg-icons'; 

export default function Footer() {
  return (
    <div className='flex justify-center items-center gap-5 py-3'>
      <a href="#">
        <FontAwesomeIcon className="duration-300 hover:opacity-30 cursor-pointer" icon={faInstagram} />
      </a>
      <FontAwesomeIcon className="duration-300 hover:opacity-30 cursor-pointer" icon={faLinkedin} />
      <FontAwesomeIcon className="duration-300 hover:opacity-30 cursor-pointer" icon={faGitAlt} />
    </div>
  )
}