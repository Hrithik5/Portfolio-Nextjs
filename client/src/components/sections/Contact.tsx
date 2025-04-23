import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  RectangleEllipsis,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  AtSignIcon,
} from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { ref: headingRef, controls: headingControls } = useScrollAnimation();
  const { ref: formRef, controls: formControls } = useScrollAnimation();
  const { ref: infoRef, controls: infoControls } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", values);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headingRef}
          animate={headingControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-primary">&lt;</span> Get In Touch{" "}
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss DevOps opportunities? I'd
            love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            ref={formRef}
            animate={formControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What's this about?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project or inquiry..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <SendIcon className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            ref={infoRef}
            animate={infoControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                    <RectangleEllipsis className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hrithikchauhan01@gmail.com"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      hrithikchauhan01@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                    <PhoneIcon className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+919920813734"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      +91-9920813734
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                    <MapPinIcon className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                      Location
                    </p>
                    <p className="text-lg font-medium">
                      Mumbai, India (Remote Available)
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/hrithik-chauhan/"
                  className="bg-blue-100 dark:bg-slate-700 hover:bg-blue-200 dark:hover:bg-slate-600 text-primary p-4 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Hrithik5"
                  className="bg-blue-100 dark:bg-slate-700 hover:bg-blue-200 dark:hover:bg-slate-600 text-primary p-4 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/Hrithik_5"
                  className="bg-blue-100 dark:bg-slate-700 hover:bg-blue-200 dark:hover:bg-slate-600 text-primary p-4 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
