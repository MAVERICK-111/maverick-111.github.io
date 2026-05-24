export interface Personal {
  name: string;
  role: string;
  tagline: string;
  email: string;
  location: string;
  resumeUrl: string;
}

export interface AboutDetail {
  label: string;
  value: string;
}

export interface AboutContent {
  paragraphs: string[];
  details: AboutDetail[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export type Skills = Record<string, string[]>;

export const personal: Personal = {
  name: "Piyush Patil",
  role: "Engineer & Developer",
  tagline:
    "Engineering undergrad at VJTI Mumbai - I ship code that solves real problems, from agentic AI pipelines to full-stack products. When I'm not building, I'm usually exploring new things.",
  email: "piyush3patil2005@gmail.com",
  location: "Mumbai, India",
  resumeUrl: "https://drive.google.com/file/d/1RX0TJw2xO7kdnpiwS8Ax8YwjY9nNt_CV/preview",
};

// ABOUT
export const about: AboutContent = {
  paragraphs: [
    "I'm Piyush - an engineering student at VJTI Mumbai who lives at the intersection of systems thinking and shipping software. I work across AI/ML, full-stack development, and competitive programming.",
    "I've built social platforms with real-time feeds, AI-powered health companions, and agentic systems that automate enterprise workflows. "
  ],
  details: [
    { label: "Education", value: "B.Tech, VJTI Mumbai" },
    { label: "Focus", value: "AI / ML, Full Stack" },
    { label: "Location", value: "Mumbai, India" },
  ],
};

// PROJECTS
export const projects: Project[] = [
  {
    title: "QuadSpace",
    description:
      "A social media platform built for the VJTI student community with feeds, profiles, alumni connect, 1v1 chat, and a noticeboard for college events.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Auth0"],
    url: "https://quadspace-xi.vercel.app",
  },
  {
    title: "Healthcare+",
    description:
      "An AI-powered multimodal health companion unifying fitness, nutrition, mental health, and medical care with disease prediction, calorie tracking via food images, and a personalized AI fitness coach.",
    tags: ["TypeScript", "Node.js", "MongoDB", "Gemini AI", "Python"],
    url: "https://healthcareplus-2b3e.vercel.app",
  },
  {
    title: "CityWatch",
    description:
      "An AI-powered civic platform for citizens to report road hazards like potholes and broken signals, with automatic CLIP-based image classification, priority scoring, and real-time updates.",
    tags: ["React", "Node.js", "PostgreSQL", "Python", "FastAPI", "Pusher", "Clerk"],
    url: "https://github.com/MAVERICK-111/CSS",
  },
  {
    title: "AssignmentLens",
    description:
      "A deterministic assignment intelligence system for education that scores assignment quality and student submissions using Bloom's Taxonomy, clarity analysis, and Jaccard similarity - no LLMs at runtime.",
    tags: ["Node.js", "JavaScript", "NLP", "WASM Embeddings"],
    url: "https://github.com/MAVERICK-111/CODEWISER_qwerty",
  },
  {
    title: "Tic-Tac-Toe RL",
    description:
      "A reinforcement learning agent trained to play Tic-Tac-Toe using Q-learning, with a Tkinter GUI, training log visualization, and auto-generated report assets.",
    tags: ["Python", "Reinforcement Learning", "NumPy", "Matplotlib"],
    url: "https://github.com/MAVERICK-111/game",
  },
  {
    title: "AlgoVision",
    description:
      "An interactive algorithm visualization tool that animates sorting, searching, and other classic algorithms step-by-step in the browser.",
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    url: "https://algovision-psp.vercel.app",
  },
];

// SKILLS
export const skills: Skills = {
  Languages: ["C++", "Python", "JavaScript", "SQL", "JAVA"],
  "AI & ML": [
    "TensorFlow",
    "PyTorch",
    "Keras",
    "OpenCV",
    "Data Preprocessing",
  ],
  "Web Dev": ["React", "Node.js", "MongoDB", "REST APIs", "PostgreSQL"],
  Tools: ["Git", "Linux", "VS Code", "Postman", "Google Colab"],
  Domains: [
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Agentic AI",
    "Competitive Programming",
  ],
};

// SOCIALS
export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/MAVERICK-111" },
  { name: "LinkedIn", url: "https://linkedin.com/in/piyush-patil-1a7b64303" },
  { name: "LeetCode", url: "https://leetcode.com/u/MAVERICK__1" },
  { name: "Codeforces", url: "https://codeforces.com/profile/MAVERICK__1" },
  { name: "CodeChef", url: "https://www.codechef.com/users/maverick_111" },
];