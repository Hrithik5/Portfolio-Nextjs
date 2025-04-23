import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SendIcon, EyeIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import CloudHostingIllustration from "@/assets/cloud_hosting.svg";

export default function Hero() {
  const { ref: textRef, controls: textControls } = useScrollAnimation();
  const { ref: imgRef, controls: imgControls } = useScrollAnimation();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 md:py-0"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            ref={textRef}
            animate={textControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Hi, I'm Hrithik Chauhan
              <br />
              <span className="text-primary">DevOps Engineer</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">
              I build secure, scalable cloud infrastructure and streamline CI/CD
              workflows to deliver fast, reliable deployments. My focus is on
              automation, resilience, and aligning DevOps with business impact.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="group" asChild>
                <a href="#contact">
                  <SendIcon className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />{" "}
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="#projects">
                  <EyeIcon className="mr-2 h-4 w-4" /> View My Work
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            ref={imgRef}
            animate={imgControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={CloudHostingIllustration}
              alt="Cloud Hosting Illustration"
              className="w-80 h-80 md:w-[28rem] md:h-[28rem] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
