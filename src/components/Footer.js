import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <p>&copy; 2025 Teja Kutchula. All rights reserved.</p>
            <a href="https://www.linkedin.com/in/tejakutchula" class="link p-3 fs-4"><FaLinkedin />Linkedin </a>|
            <a href="https://github.com/teja143kt" class="link p-3 fs-4"> <FaGithub />Github</a>
        </div>
    )
}

export default Footer
