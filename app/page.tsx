/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Github from "@/components/ui/github-icon";
import GoogleDrive from "@/components/ui/google";

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
  ];

  const skills = [
    { name: "HTML/CSS", icon: "🌐" },
    { name: "JavaScript", icon: "JS" },
    { name: "TypeScript", icon: "TS" },
    { name: "Python", icon: "💻" },
    { name: "React", icon: "⚛️" },
    { name: "Git", icon: "🔀" },
    { name: "SQL", icon: "🗃️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Prisma", icon: "🌟" },
    { name: "Drizzle", icon: "🌟" },
    { name: "Express.js", icon: "🚀" },
    { name: "Next.js", icon: "🌍" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Convex", icon: "🌀" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shivam-gupta-97162b301/" },
    { name: "Github", url: "https://github.com/ShivamGupta987" },
    { name: "Twitter", url: "https://x.com/ShivamGupta9866" },
    { name: "Leetcode", url: "https://leetcode.com/u/Shivamg987/" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: isLoaded ? 1 : 0, filter: isLoaded ? "blur(0px)" : "blur(10px)" }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-600"
            >
              Shivam Gupta
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="https://drive.google.com/file/d/1qa-WuEyIMlLzCgNJfM5uAD0yqaz7DFlc/view?usp=sharing"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 text-lg font-semibold text-white transition-all duration-300 border-indigo-500 hover:bg-indigo-500/20"
                >
                  <GoogleDrive />
                  View Resume
                </Button>
              </Link>
            </motion.div>
            <motion.p
              className="text-lg leading-relaxed text-zinc-300"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: isLoaded ? 1 : 0, filter: isLoaded ? "blur(0px)" : "blur(10px)" }}
              transition={{ duration: 0.8 }}
            >
              I'm a passionate Computer Science student with a deep interest in web development and AI. Currently pursuing my undergraduate degree, I thrive on creating innovative solutions and mastering cutting-edge technologies.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed text-zinc-300"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: isLoaded ? 1 : 0, filter: isLoaded ? "blur(0px)" : "blur(10px)" }}
              transition={{ duration: 0.8 }}
            >
              Connect with me on{" "}
              {socialLinks.map((link, index) => (
                <span key={link.name}>
                  <Link
                    href={link.url}
                    className="text-indigo-400 transition-colors border-b border-indigo-500 border-dotted hover:text-indigo-300 hover:border-indigo-300"
                    target="_blank"
                  >
                    {link.name}
                  </Link>
                  {index < socialLinks.length - 1 && index !== socialLinks.length - 2 ? ", " : ""}
                  {index === socialLinks.length - 2 ? " or " : ""}
                </span>
              ))}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 text-sm transition-all duration-300 border rounded-lg bg-zinc-900/50 border-zinc-700 text-zinc-300 hover:bg-indigo-500/10 hover:border-indigo-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm text-indigo-400">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );
      case "education":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              className="p-6 transition-all duration-300 border rounded-lg bg-zinc-900/50 border-zinc-800 hover:border-indigo-500"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold text-white">Bachelor of Engineering in Computer Science</h3>
              <p className="mt-2 text-zinc-300">Thakur College of Engineering and Technology (Mumbai), Expected Graduation: May 2026</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-zinc-300">
                <li>GPA: 9.21/10</li>
                <li>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Operating System, Computer Network</li>
              </ul>
            </motion.div>
            <motion.div
              className="p-6 transition-all duration-300 border rounded-lg bg-zinc-900/50 border-zinc-800 hover:border-indigo-500"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold text-white">Higher Secondary School Certificate (H.S.C) - 2022</h3>
              <p className="mt-2 text-zinc-300">Maharashtra State Board. Passed with 69.00%.</p>
            </motion.div>
            <motion.div
              className="p-6 transition-all duration-300 border rounded-lg bg-zinc-900/50 border-zinc-800 hover:border-indigo-500"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold text-white">Secondary School Certificate (S.S.C) - 2020</h3>
              <p className="mt-2 text-zinc-300">Maharashtra State Board. Passed with 86.20%.</p>
            </motion.div>
          </motion.div>
        );
      case "projects":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {[
              {
                title: "CodeCast – Collaborative Multi-Language Online IDE",
                liveLink: "https://code-editor-eosin-six.vercel.app/",
                githubLink: "https://github.com/ShivamGupta987/CODE-EDITOR",
                description:
                  "Built an online IDE platform using Next.js 15, Convex, Clerk, and TypeScript, supporting 10+ programming languages with smart output handling, execution history, and a community-driven code-sharing system. Features include customizable VSCode themes, webhook integration, advanced search/filtering, and a stats dashboard—offering both free and pro plans.",
                tags: ["React", "Next.js", "Tailwind CSS", "Postgress", "Clerk", "Prisma", "Convex"],
              },
              {
                title: "Glimpse - A Modern Video Interview Platform with Real-Time Collaboration",
                liveLink: "https://glimpse-saas.vercel.app/",
                githubLink: "https://github.com/ShivamGupta987/GLIMPSE_SAAS",
                description:
                  "Built a real-time video calling interview platform using Next.js, TypeScript, Stream, Convex, and Clerk, featuring seamless video calls, screen sharing, and screen recording. Integrated server actions, layouts, and both server/client components for optimized performance, with secure auth and a polished UI via Tailwind CSS + Shadcn.",
                tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Clerk", "Convex", "Stream", "Server Actions"],
              },
              {
                title: "File Fly Away - Fast, Private, and Link-Based File Delivery",
                liveLink: "https://file-fly-away.vercel.app/",
                githubLink: "https://github.com/ShivamGupta987/file-fly-away",
                description:
                  "Built a file-sharing platform enabling fast and secure transfer of files with unique shareable links and expiry controls. Integrated real-time status updates and download tracking for a smooth user experience. Developed with a focus on performance, minimal UI, and seamless file uploads using modern web technologies.",
                tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Supabase", "Shadcn UI"],
              },
              {
                title: "Foodi - A Complete Food Web Application",
                liveLink: "https://complete-food-web.vercel.app/",
                githubLink: "https://github.com/ShivamGupta987/full-stack-task-management-app",
                description:
                  "Built a full-stack food service platform using React, Tailwind CSS, Node.js, and MongoDB, tailored for food enthusiasts and entrepreneurs. Integrated Firebase authentication, Stripe payments, admin dashboard, dynamic menu browsing, and add-to-cart features.",
                tags: ["React", "JavaScript", "Tailwind CSS", "Daisy UI", "Firebase", "MongoDB", "Stripe"],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="p-6 transition-all duration-300 border rounded-lg bg-zinc-900/50 border-zinc-800 hover:border-indigo-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-x-3">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <Button variant="link" className="text-indigo-400 hover:text-indigo-300">
                    <Link href={project.liveLink} target="_blank">
                      Live Link
                    </Link>
                  </Button>
                  <Button variant="ghost">
                    <Link href={project.githubLink} target="_blank">
                      <Github />
                    </Link>
                  </Button>
                </div>
                <p className="mt-3 leading-relaxed text-zinc-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs transition-all duration-300 rounded-full bg-zinc-800 text-zinc-300 hover:bg-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-black to-zinc-900 text-zinc-300">
      <div className="max-w-6xl px-4 py-16 mx-auto md:py-24 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="sticky space-y-4 top-24"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`block text-left text-xl font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-indigo-400 border-l-4 border-indigo-500 pl-2"
                    : "text-zinc-500 hover:text-indigo-300 hover:pl-2"
                }`}
                whileHover={{ x: 5 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="min-h-[400px]">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
