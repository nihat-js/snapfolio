import { log } from "console";

export const general = {
  shortBio: "Don't think outside of the box. Think like there is no box.",
  longBio: ` I'm a motivated full stack developer, specializing in PHP,
  Laravel, and Next.js. I have a passion for creating efficient and scalable web applications, and I'm always eager to learn new technologies. My goal is to build innovative solutions that make a difference in people's lives.`,
  profileImage: "",
  mail: "a",
  fullName: "Nihat Abdullazade",
  position: "Full Stack Developer",
};

export const skills = [
  "PHP",
  "Laravel",
  "NextJS",
  "Zustand",
  "Design Patterns",
  "Solid Principles",
  "Javascript",
  "TypeScript",
  "React",
  "NodeJS/ExpressJS",
  "CodeIgniter",
  "Docker",
  "MySQL, PostgreSQL",
  "Git",
  "Linux",
  "Restful APIs",
];

export const links = [
  {
    platform: "Github",
    name: "nihat-js",
    url: "https://github.com/nihat-js",
    logo: "./github.svg",
  },
  {
    platform: "LinkedIn",
    name: "Nihat Abdullazade",
    url: "https://www.linkedin.com/in/nihat-abdullazade-6569621bb/",
    logo: "./linkedin.svg",
  },
  {
    platform: "Instagram",
    name: "nih1t",
    url: "https://www.instagram.com/nih1t/",
    logo: "./instagram.svg",
  },
  {
    platform: "Phone Number",
    name: "+994507514178",
    url: "tel:+994507514178",
    logo: "./call.svg",
  },
];

export const featuredProjects = [
  {
    "name": "Asan CV",
    "description": `Create your CV in minutes and download it in PDF format.`,
    "github": "https://github.com/nihat-js/asan-cv",
    "link": "https://asancv.com",
    "tags": ["next"],
  }
  // {
  //   name: "Zaman",
  //   description:
  //     "Connect with friends on our social media platform, where you can share posts, comment, and chat in real time. Express your opinions with upvotes and downvote",
  //   github: "https://github.com/nihat-js/zaman",
  //   link: "",
  //   tags: ["react", "node"],
  // },
  // {
  //   name: "Magic Api",
  //   description: "Alternative to jsonplaceholder Repo",
  //   tags: ["node", "express"],
  // },
];

export const workExperiences = [
  {
    logo: "./icons/job-1.svg",
    position: "Laravel Developer",
    company: "ACM LLC",
    duration: "2024 - Present",
    text:
      `My job is to build and maintain web applications using the Laravel framework. I manage backend development with Eloquent and MySQL, while crafting dynamic front-end experiences with Blade and modern JavaScript tools."
      `,
  },
  {
    logo: "./icons/job-2.svg",
    position: "PHP Developer",
    company: "AVH LLC",
    duration: "2022 - 2024",
    text:
      `I use the CodeIgniter 3 framework to develop and maintain web applications. My responsibilities
        include writing MySQL queries proficiently and using Bootstrap and jQuery for front-end
        development`,
  },
];

type TypeColors = {
  [key: string]: string;
};
export const tagColors: TypeColors = {
  react: "bg-blue-500",
  reactNative: "bg-green-500",
  node: "bg-purple-500",
  vue: "bg-purple-500",
  python: "bg-yellow-500",
  laravel: "bg-red-500",
  codeigniter: "bg-blue-500",
  php: "bg-green-500",
  express: "bg-emerald-500",
  default: "bg-gray-500",
};
