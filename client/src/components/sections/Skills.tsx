import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  CloudIcon,
  GitBranchIcon,
  Group,
  BarChartIcon,
  FileCodeIcon,
  ShieldIcon,
  TerminalIcon,
  NetworkIcon,
} from "lucide-react";

interface SkillCategoryProps {
  index: number;
  icon: React.ReactNode;
  iconBgClass: string;
  iconTextClass: string;
  title: string;
  skillPillBgClass: string;
  skillPillTextClass: string;
  skills: string[];
}

function SkillCategory({
  index,
  icon,
  iconBgClass,
  iconTextClass,
  title,
  skillPillBgClass,
  skillPillTextClass,
  skills,
}: SkillCategoryProps) {
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
      className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
    >
      <div
        className={`h-12 w-12 ${iconBgClass} rounded-lg flex items-center justify-center mb-6`}
      >
        <div className={iconTextClass}>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className={`tech-pill ${skillPillBgClass} ${skillPillTextClass} text-xs font-medium px-3 py-1 rounded-full transition-transform hover:scale-105`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, controls } = useScrollAnimation();

  const skillCategories = [
    {
      icon: <CloudIcon className="h-5 w-5" />,
      iconBgClass: "bg-blue-100 dark:bg-blue-900",
      iconTextClass: "text-primary",
      title: "Cloud Platforms",
      skillPillBgClass: "bg-blue-100 dark:bg-blue-900",
      skillPillTextClass: "text-blue-800 dark:text-blue-200",
      skills: ["AWS", "Azure", "GCP"],
    },
    {
      icon: <GitBranchIcon className="h-5 w-5" />,
      iconBgClass: "bg-green-100 dark:bg-green-900",
      iconTextClass: "text-green-600 dark:text-green-400",
      title: "CI/CD & Automation",
      skillPillBgClass: "bg-green-100 dark:bg-green-900",
      skillPillTextClass: "text-green-800 dark:text-green-200",
      skills: ["Jenkins", "GitHub Actions"],
    },
    {
      icon: <Group className="h-5 w-5" />,
      iconBgClass: "bg-purple-100 dark:bg-purple-900",
      iconTextClass: "text-purple-600 dark:text-purple-400",
      title: "Containerization",
      skillPillBgClass: "bg-purple-100 dark:bg-purple-900",
      skillPillTextClass: "text-purple-800 dark:text-purple-200",
      skills: ["Docker", "Kubernetes", "Helm", "Docker Compose"],
    },
    {
      icon: <BarChartIcon className="h-5 w-5" />,
      iconBgClass: "bg-amber-100 dark:bg-amber-900",
      iconTextClass: "text-amber-600 dark:text-amber-400",
      title: "Monitoring & Logging",
      skillPillBgClass: "bg-amber-100 dark:bg-amber-900",
      skillPillTextClass: "text-amber-800 dark:text-amber-200",
      skills: ["Prometheus", "Grafana", "ELK Stack"],
    },
    {
      icon: <FileCodeIcon className="h-5 w-5" />,
      iconBgClass: "bg-red-100 dark:bg-red-900",
      iconTextClass: "text-red-600 dark:text-red-400",
      title: "Infrastructure as Code",
      skillPillBgClass: "bg-red-100 dark:bg-red-900",
      skillPillTextClass: "text-red-800 dark:text-red-200",
      skills: ["Terraform", "Ansible", "CloudFormation"],
    },
    {
      icon: <ShieldIcon className="h-5 w-5" />,
      iconBgClass: "bg-teal-100 dark:bg-teal-900",
      iconTextClass: "text-teal-600 dark:text-teal-400",
      title: "Security & Compliance",
      skillPillBgClass: "bg-teal-100 dark:bg-teal-900",
      skillPillTextClass: "text-teal-800 dark:text-teal-200",
      skills: ["Vault", "Trivy", "SonarQube"],
    },
    {
      icon: <TerminalIcon className="h-5 w-5" />,
      iconBgClass: "bg-indigo-100 dark:bg-indigo-900",
      iconTextClass: "text-indigo-600 dark:text-indigo-400",
      title: "Scripting & Programming",
      skillPillBgClass: "bg-indigo-100 dark:bg-indigo-900",
      skillPillTextClass: "text-indigo-800 dark:text-indigo-200",
      skills: ["Bash", "Python", "Go"],
    },
    {
      icon: <NetworkIcon className="h-5 w-5" />,
      iconBgClass: "bg-pink-100 dark:bg-pink-900",
      iconTextClass: "text-pink-600 dark:text-pink-400",
      title: "Networking & Services",
      skillPillBgClass: "bg-pink-100 dark:bg-pink-900",
      skillPillTextClass: "text-pink-800 dark:text-pink-200",
      skills: ["Nginx", "Istio", "VPC/Subnetting"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
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
            <span className="text-primary">&lt;</span> DevOps Expertise{" "}
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My technical toolkit spans across cloud platforms, automation tools,
            containerization, and monitoring solutions to build efficient and
            reliable DevOps pipelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              index={index}
              icon={category.icon}
              iconBgClass={category.iconBgClass}
              iconTextClass={category.iconTextClass}
              title={category.title}
              skillPillBgClass={category.skillPillBgClass}
              skillPillTextClass={category.skillPillTextClass}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
