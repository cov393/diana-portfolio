import map from "../assets/projects/map.jpg";
import weather from "../assets/projects/weather.webp";
import carparking from "../assets/projects/carparking.png";
import chat from "../assets/projects/chat.png";
import ubs from "../assets/companies/ubs.png";
import WileyEdge from "../assets/companies/Wiley-Edge.png";
import freelance from "../assets/companies/freelance.png";

export const HERO_CONTENT = `Motivated and detail-oriented software developer with hands-on experience in building scalable, high-performance systems. I have contributed to the successful deployment of cloud-based solutions, backend architectures, and user-focused applications. My expertise spans scripting, automation, and full-stack development, complemented by a passion for delivering seamless, innovative user experiences. I strive to design and implement robust, maintainable software solutions that meet user needs and align with organizational goals.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer with a passion for creating scalable and high-performance systems. With hands-on experience in backend development, cloud technologies, and automation, I have worked with a variety of technologies, including React, Node.js, Python, C#, Azure, MongoDB, and Docker. My journey in software development started with a curiosity about how things work, which has evolved into a career where I continually strive to learn and adapt to new challenges.

I am motivated by solving complex technical problems and delivering innovative solutions that enhance system performance and reliability. I thrive in collaborative environments where I can contribute my skills in backend development, cloud infrastructure, and automation to achieve the best outcomes.

Outside of coding, I enjoy hacking virtual machines and solving puzzles on Hack The Box, which helps me sharpen my problem-solving skills. Additionally, I stay active, explore emerging technologies, and continuously learn through real-world projects.`;

export const EXPERIENCES = [
  {
    year: "2023 July - 2024 Nov.",
    image: ubs,
    role: "Storage Engineer",
    company: "UBS.",
    description: `Designed and implemented scalable storage solutions utilizing Azure, Azure VMs, and NetApp ONTAP. Automated infrastructure deployment and management using Kubernetes, Terraform, and CI/CD pipelines. Developed and optimized system processes with scripting in Bash, PowerShell, and Linux Red Hat. Built Docker containers and integrated BlueXP to enhance storage capabilities and operational efficiency`,
    technologies: ["Azure", "NetApp", "Kubernetes", "Terraform", "CI/CD", "Bash", "Powershell", "Linux", "Docker", "BlueXP" ],
  },
  {
    year: "2022 - 2023",
    image: WileyEdge,
    role: "Software Engineer",
    company: "Wiley Edge",
    description: `Developed technical expertise through comprehensive training and hands-on projects, focusing on distributed systems and financial infrastructure. Designed and implemented solutions using AWS for cloud-based deployments, leveraging Python for backend logic and scripting with Bash to optimize processes. Created and managed databases with MySQL to ensure data integrity and efficiency. Automated deployment and integration workflows using CI/CD pipelines, ensuring streamlined delivery. Collaborated with teams to apply modern tools and frameworks to tackle complex technical challenges, bridging theoretical knowledge with practical applications in software engineering.`,
    technologies: ["AWS", "Bash", "Python", "mySQL", "CI/CD"],
  },
  {
    year: "2022",
    image: freelance,
    role: "Backend Developer",
    company: "Freelance",
    description: `Engineered a backend system enabling user authentication, registration, and job listing management functionalities. Developed and deployed RESTful APIs using Express.js and integrated with MongoDB for secure and efficient data storage. Documented APIs comprehensively to facilitate seamless collaboration and long-term maintainability..`,
    technologies: ["RESTful API", "Express.js", "MongoDB", "Vue.js"],
  },
  ];

export const PROJECTS = [
  {
    title: "Real-Time Chat Application",
    image: chat,
    description:
      "A fully responsive live chat platform with features like unique room creation and live messaging. Designed for reliability and scalability, deployed globally.",
    technologies: ["Node.js", "HTML", "CSS", "JavaScript", "NoSQL"],
  },
  {
    title: "Weather Application",
    image: weather, 
    description:
      "A dynamic weather information platform providing real-time data retrieval via APIs. Features include a responsive design and robust error handling.",
    technologies: ["Node.js", "HTML", "CSS", "Open API"],
  },
  {
    title: "Car Parking Finder App",
    image: carparking, 
    description:
      "A cross-platform application for finding and booking parking spaces with real-time location services. Integrated Google aps API and Firebase for data storage and booking functionality.",
    technologies: ["C#", ".NET", "Xamarin", "SQL", "Firebase"],
  },
  {
    title: "Crime and House Prices Data Visualization",
    image: map, 
    description:
      "An interactive map overlaying crime data and house prices. Utilized Python for data processing and visualization with libraries like Pandas and NumPy.",
    technologies: ["Python", "Pandas", "Excel"],
  },
];

export const CONTACT = {
  address: "London, UK",
  email: "diana.percatkina@outlook.com",
};
