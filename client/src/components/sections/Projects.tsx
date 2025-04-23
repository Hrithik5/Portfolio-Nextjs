import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  ArrowRightIcon,
  Container,
  Layers,
  Shield,
  BarChart,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  icon: React.ReactNode;
  bgColor: string;
  title: string;
  description: string;
  technologies: string[];
  caseStudyLink: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
    >
      <div
        className={`h-48 overflow-hidden flex items-center justify-center ${project.bgColor}`}
      >
        <div className="text-white transform transition-transform hover:scale-110">
          {project.icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.caseStudyLink}
          className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
        >
          View Case Study <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, controls } = useScrollAnimation();

  const projects: Project[] = [
    {
      icon: <Container size={80} strokeWidth={1} />,
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-700",
      title: "Secure ECS Flask App on AWS",
      description:
        "A secure and scalable AWS architecture for deploying a Flask application using ECS (Elastic Container Service), DynamoDB, and an Application Load Balancer (ALB). Designed for high availability, fault tolerance, and compliance with AWS best practices.",
      technologies: ["Python", "Flask API", "Terraform", "AWS", "Serverless"],
      caseStudyLink:
        "https://github.com/Hrithik5/Terraform-Projects/tree/Secure-ECS-Flask-App",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
          <line x1="9.69" y1="8" x2="21.17" y2="8" />
          <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
          <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
          <line x1="14.31" y1="16" x2="2.83" y2="16" />
          <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-700",
      title: "Two-Tier Architecture on AWS using Terraform",
      description:
        "This project demonstrates the deployment of a two-tier architecture on AWS using Terraform. The architecture consists of a highly available web application running on EC2 instances with a MySQL RDS database in the backend, ensuring scalability and reliability.",
      technologies: ["Terraform", "AWS", "Vault"],
      caseStudyLink:
        "https://github.com/Hrithik5/Terraform-Projects/tree/2tier",
    },
    {
      icon: <Layers size={80} strokeWidth={1} />,
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
      title: "HungerHaul - Food Order App",
      description:
        "HungerHaul is a full-stack food ordering application built with TypeScript. It enables users to explore menus, place orders, and track deliveries with a clean and intuitive UI. Admins can manage the platform with dedicated access, making it a complete end-to-end food ordering system.",
      technologies: [
        "Typescript",
        "ExpressJs",
        "MongoDB",
        "JWT",
        "NodeJs",
        "Github Actions",
        "Postman",
      ],
      caseStudyLink: "https://github.com/Hrithik5/HungerHaul---Food-Order-APP",
    },
    {
      icon: <Shield size={80} strokeWidth={1} />,
      bgColor: "bg-gradient-to-br from-teal-600 to-teal-800",
      title: "Microservices-Based Video-to-MP3 Converter",
      description:
        "This project is a microservices-based application that converts video files into MP3 format. It leverages Python, RabbitMQ, MongoDB, MySQL, Docker, and Kubernetes to ensure efficient processing, storage, and delivery of MP3 files.",
      technologies: [
        "AWS",
        "API Gateway",
        "Kubernetes",
        "RabbitMQ",
        "Python",
        "Slack",
        "Docker",
        "MongoDB",
        "MySQL",
      ],
      caseStudyLink: "https://github.com/Hrithik5/Microservices-Project",
    },
    {
      icon: <BarChart size={80} strokeWidth={1} />,
      bgColor: "bg-gradient-to-br from-emerald-600 to-emerald-800",
      title: "Github-and-Jira-Automation",
      description:
        "A Python-based automation tool that integrates GitHub and Jira to streamline issue tracking and development workflows.",
      technologies: ["Github", "AWS EC2", "Jira", "Weebhook"],
      caseStudyLink: "https://github.com/Hrithik5/Github-and-Jira-Automation",
    },
    {
      icon: <Cloud size={80} strokeWidth={1} />,
      bgColor: "bg-gradient-to-br from-green-600 to-green-800",
      title: "Dotfiles",
      description:
        "A modern, minimal, and modular set of dotfiles for macOS crafted for productivity, DevOps, and a clean terminal aesthetic.",
      technologies: ["Lua", "Shell"],
      caseStudyLink: "https://github.com/Hrithik5/dotfiles",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-primary">&lt;</span> Featured Projects{" "}
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real-world DevOps solutions I've implemented to solve complex
            infrastructure and automation challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://github.com/Hrithik5">
              View All Projects{" "}
              <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
