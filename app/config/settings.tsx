export const general = {
  shortBio: "Don't think outside of the box.Think like there is no box.",
  longBio: ` I'm a motivated full-stack web developer, specializing in PHP,
          CodeIgniter, Laravel and Mysql. On the front-end side, I am
          well-versed in React and Vue.js, two of the most popular JavaScript
          libraries and frameworks`,
  profileImage: "",
  mail: "a",
  gmail: "",
  fullName: "Nihat Abdullazade",
  position: "Full Stack Developer",
};

export const skills = [
  "PHP",
  "Laravel",
  "CodeIgniter",
  "Solid Principles",
  "Docker",
  "Javascript",
  "React|TypeScript",
  "NextJS",
  "NodeJS/ExpressJS",
  "MySQL",
  "Git",
  "Linux",
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
    name: "Zaman",
    description:
      "Connect with friends on our social media platform, where you can share posts, comment, and chat in real time. Express your opinions with upvotes and downvote",
    github: "https://github.com/nihat-js/zaman",
    link: "",
    tags: ["react", "node"],
  },
  {
    name: "Magic Api",
    description: "Alternative to jsonplaceholder Repo",
    tags: ["node", "express"],
  },
];

export const workExperiences = [
  {
    logo:
      "https://media.licdn.com/dms/image/v2/D4E0BAQEdkEhxoF_8tw/company-logo_200_200/company-logo_200_200/0/1726131651313?e=1740009600&v=beta&t=Q6SROnTsUZYOo5xd9uAkNqzW4x1iIaWYSiKTH4LJ6gE",
    position: "Laravel Devloper",
    company: "Tripocell LLC",
    duration: "2024 - Present",
    text:
      `My job is to build and maintain web applications using the Laravel framework. I manage backend development with Eloquent and MySQL, while crafting dynamic front-end experiences with Blade and modern JavaScript tools."
      `,
  },
  {
    // logo :
    position: "PHP Developer",
    company: "AVH LLC",
    duration: "2023 - 2024",
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
