import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CheckCircleIcon } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
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
      className="timeline-item pl-8 pb-12 relative"
    >
      <div className="timeline-dot absolute left-[-9px] top-5 w-5 h-5 rounded-full bg-primary"></div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <h3 className="text-xl font-bold">{experience.title}</h3>
          <div className="text-primary font-medium mt-2 md:mt-0">
            {experience.period}
          </div>
        </div>
        <div className="mb-4">
          <span className="font-medium">{experience.company}</span> •{" "}
          <span className="text-slate-600 dark:text-slate-400">
            {experience.location}
          </span>
        </div>
        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start">
              <CheckCircleIcon className="text-green-500 mt-1 mr-2 h-4 w-4 flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, controls } = useScrollAnimation();

  const experiences: Experience[] = [
    {
      title: "AWS Cloud DevOps Engineer",
      company: "Viprak Web Solutions ",
      location: "Mumbai, India",
      period: "Apr 2024 - Dec 2024",
      achievements: [
        "Architected a scalable and secure AWS infrastructure using services such as EC2, S3, RDS, and VPC to suppot the POPT platform’s requirements",
        "Developed optimized CI/CD pipelines using AWS CodePipeline reducing deployment time by 40%. This accelerated release cycles and enhanced collaboration between development and operations teams",
        "Administered user access with IAM Policies, reinforcing security and compliance through routine access audits",
        "Utilized AWS CloudWatch to monitor application performance and resource utilization. Implemented alerts to proactively identify and resolve issues, ensuring high availability and reliability of the platform",
        "Synchronized the POPT mobile app with AWS backend APIs, enabling real-time data flow and enhancing campaign performance accuracy",
      ],
    },
    {
      title: "Software Engineer",
      company: "HungerHaul",
      location: "Mumbai, India",
      period: "Aug 2023 - Feb 2024",
      achievements: [
        "Built a scalable backend using Express and TypeScript with APIs for user auth, menu, and order management",
        "Integrated JWT authentication with role-based access control to manage user and admin permissions.",
        "Designed MongoDB schemas with Mongoose to manage users, food items, and orders eﬃciently.",
        "Automated CI/CD pipeline with GitHub Actions and documented APIs via Postman collection for easier access.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Mumble",
      location: "Mumbai, India",
      period: "Apr 2023 - Jul 2023",
      achievements: [
        "Built CI/CD pipelines with Jenkins, reducing manual work by 45% and improving deployment eﬃciency.",
        "Developed and deployed Dockerized Python microservices for auth, admin, and content workflows.",
        "Configured GitHub–Jira integration to automate issue syncing and facilitate project tracking.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
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
            <span className="text-primary">&lt;</span> Work Experience{" "}
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey as a DevOps engineer across various
            industries and technologies.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
