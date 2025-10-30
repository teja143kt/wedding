import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer '>
            <p className='m-2' >&copy; 2025 Wedding photography. All rights reserved.</p>
            <a href="https://www.linkedin.com/in/tejakutchula" class="icon fs-5"><FaLinkedin />Linkedin </a>|
            <a href="https://github.com/teja143kt" class="icon fs-5"> <FaGithub />Github</a>
        </div>
    )
}

export default Footer
