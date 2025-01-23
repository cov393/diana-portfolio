import {motion} from "framer-motion";


import {RiReactjsLine} from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa";
import {BiLogoPostgresql} from "react-icons/bi"
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineDotNet } from "react-icons/ai";
import { VscTerminalBash } from "react-icons/vsc";
import { SiTerraform } from "react-icons/si";
import { TbBrandPowershell } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandXamarin } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloud } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiNetapp } from "react-icons/si";

const getRandomDuration = () => Math.floor(Math.random() * 10) + 1;

const iconVariants = () => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: getRandomDuration(),
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});


import { PiFileCSharp } from "react-icons/pi";const Technologies = () => {
    const randomDuration = getRandomDuration();
    return (
        <div className="border-b border-neural-800 pb-24">
            <motion.h1 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-100}}
                transition={{duration:1.5}} className="my-20 text-center text-4xl"> Technologies</motion.h1>
            <motion.h2 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-10}}
                transition={{duration:1.5}} className="my-10 text-center text-2xl">Languages</motion.h2>
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <VscTerminalBash className="text-3xl text-white-400"/>
                    <span className="tooltip-text">Bash</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <IoLogoJavascript className="text-3xl text-yellow-300"/>
                    <span className="tooltip-text">JavaScript</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <PiFileCSharp className="text-3xl text-violet-500"/>
                    <span className="tooltip-text">C#</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <FaPython className="text-3xl text-green-500"/>
                    <span className="tooltip-text">Python</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <BiLogoPostgresql className="text-3xl text-sky-700"/>
                    <span className="tooltip-text">SQL</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <SiTerraform className="text-3xl text-violet-700"/>
                    <span className="tooltip-text">Terraform</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <TbBrandPowershell className="text-3xl text-violet-700"/>
                    <span className="tooltip-text">Powershell</span>
                </motion.div>
            </motion.div>

            <motion.h2 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-10}}
                transition={{duration:1.5}} className="my-10 text-center text-2xl">Frameworks</motion.h2>
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container"
                     >
                    <FaBootstrap className="text-3xl text-violet-600"/>
                    <span className="tooltip-text">Bootstrap</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <DiDjango className="text-3xl text-green-400"/>
                    <span className="tooltip-text">Django</span>

                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <AiOutlineDotNet className="text-3xl text-sky-500"/>
                    <span className="tooltip-text">. NET</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <SiFlask  className="text-3xl text-red-700"/>
                    <span className="tooltip-text">Flask</span>
                </motion.div>
                
                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <IoLogoFirebase className="text-3xl text-yellow-500"/>
                    <span className="tooltip-text">Firebase</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <RiReactjsLine className="text-3xl text-cyan-400"/>
                    <span className="tooltip-text">ReactJS</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <FaNodeJs className="text-3xl text-green-500"/>
                    <span className="tooltip-text">NodeJS</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <TbBrandXamarin className="text-3xl text-sky-700"/>
                    <span className="tooltip-text">Xamarin</span>
                </motion.div>
            </motion.div>

            <motion.h2 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-10}}
                transition={{duration:1.5}} className="my-10 text-center text-2xl">DevOps</motion.h2>
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <VscAzure className="text-3xl text-sky-500" />
                    <span className="tooltip-text">Azure</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <SiGooglecloud className="text-3xl text-cyan-500"/>
                    <span className="tooltip-text">Google Cloud</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <SiHeroku className="text-3xl text-violet-400"/>
                    <span className="tooltip-text">Heroku</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <FaAws className="text-3xl text-white-300"/>
                    <span className="tooltip-text">AWS</span>
                </motion.div>

            </motion.div>

            <motion.h2 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-10}}
                transition={{duration:1.5}}
                className="my-10 text-center text-2xl">Operation System</motion.h2>
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <FaWindows className="text-3xl text-cyan-400"/>
                    <span className="tooltip-text">Windows</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <FcLinux className="text-3xl"/>
                    <span className="tooltip-text">Linux</span>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4 relative tooltip-container">
                    <SiNetapp className="text-3xl text-blue-500"/>
                    <span className="tooltip-text">NetApp</span>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies