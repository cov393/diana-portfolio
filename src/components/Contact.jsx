import { CONTACT } from "../constants";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { TbFileCv } from "react-icons/tb";
import resume from "../../public/Diana Percatkina Resume.pdf"
import{motion} from "framer-motion"
const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1                
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-100}}
                transition={{duration: 0.5}}  
                className="my-10 text-center text-4xl">Get in Touch</motion.h1>
            <div className="m-8 flex items-center justify-center gap-4 text-3xl">
                <a
                    href={resume}
                    download="Diana Percatkina Resume.pdf"
                    title="Download CV"
                >
                    <TbFileCv />
                </a>

                <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.linkedin.com/in/diana-percatkina-91b937217/">
                        <FaLinkedin href="https://www.linkedin.com/in/diana-percatkina-91b937217/"/>
                </a>

                <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://github.com/cov393">
                        <FaGithub />
                </a>

            </div>
            <div className="text-center tracking-tighter">
                <motion.p                                        
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration: 0.5}}
                    className="my-4">{CONTACT.address}</motion.p>
                <motion.p                                        
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:1, x:100}}
                    transition={{duration: 0.5}}
                     className="my-4">{CONTACT.phoneNo}</motion.p>
                <a href="mailto:diana.percatkina@outlook.com" className="border-b">
                    {CONTACT.email}
                </a>
            </div>
        </div>
    )
}

export default Contact;