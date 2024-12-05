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

import {motion} from "framer-motion";

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
                    className="rounded-2xl border-4 border-neural-800 p-4">
                    <VscTerminalBash className="text-3xl text-white-400"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4">
                    <IoLogoJavascript className="text-3xl text-yellow-300"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4">
                    <PiFileCSharp className="text-3xl text-violet-500"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4">
                    <FaPython className="text-3xl text-green-500"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4">
                    <FaNodeJs className="text-3xl text-green-500"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4">
                    <BiLogoPostgresql className="text-3xl text-sky-700"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4">
                    <SiTerraform className="text-3xl text-violet-700"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neural-800 p-4">
                    <TbBrandPowershell className="text-3xl text-violet-700"/>
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
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <FaBootstrap className="text-3xl text-violet-600"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <DiDjango className="text-3xl text-green-400"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <AiOutlineDotNet className="text-3xl text-sky-500"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <SiFlask  className="text-3xl text-red-700"/>
                </motion.div>
                
                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <IoLogoFirebase className="text-3xl text-yellow-500"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <RiReactjsLine className="text-3xl text-cyan-400"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <FaNodeJs className="text-3xl text-green-500"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <TbBrandXamarin className="text-3xl text-sky-700"/>
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
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <VscAzure className="text-3xl text-sky-500" data-tip="ReactJS" />
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <SiGooglecloud className="text-3xl text-cyan-500"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <SiHeroku className="text-3xl text-violet-400"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <FaAws className="text-3xl text-white-300"/>
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
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <FaWindows className="text-3xl text-cyan-400"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <FcLinux className="text-3xl"/>
                </motion.div>

                <motion.div 
                    variants={iconVariants()}
                    initial="initial"
                    animate="animate"
                     className="rounded-2xl border-4 border-neural-800 p-4">
                    <SiNetapp className="text-3xl text-blue-500"/>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies