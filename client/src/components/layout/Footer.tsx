import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  MessageSquareIcon,
  SendIcon,
} from "lucide-react";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="text-slate-400 hover:text-primary transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-slate-400 hover:text-primary transition-colors"
    >
      {icon}
    </a>
  );
}

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscribe - would connect to backend
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-bold text-xl tracking-tight">
              <span className="text-primary">Hrithik</span> Chauhan
            </a>
            <p className="text-slate-400 mt-2">DevOps & Cloud Engineer</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-6 sm:space-y-0 mb-6 md:mb-0">
            <div>
              <h4 className="font-semibold mb-3">Navigation</h4>
              <ul className="space-y-2">
                <FooterLink href="#about">About</FooterLink>
                <FooterLink href="#skills">Skills</FooterLink>
                <FooterLink href="#projects">Projects</FooterLink>
                <FooterLink href="#experience">Experience</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Newsletter</h4>
            <p className="text-slate-400 mb-3">
              Subscribe for DevOps tips and updates
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none bg-slate-800 border-slate-700 text-white"
                required
              />
              <Button type="submit" className="rounded-l-none">
                <SendIcon className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hrithik Chauhan. All rights
            reserved.
          </p>

          <div className="flex space-x-4">
            <SocialLink
              href="https://www.linkedin.com/in/hrithik-chauhan/"
              icon={<LinkedinIcon className="h-5 w-5" />}
            />
            <SocialLink
              href="https://github.com/Hrithik5"
              icon={<GithubIcon className="h-5 w-5" />}
            />
            <SocialLink
              href="https://x.com/Hrithik_5"
              icon={<TwitterIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
