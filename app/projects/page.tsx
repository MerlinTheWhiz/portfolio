import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects | Michael Anokam",
  description: "All my projects, personal, client, and open-source.",
  openGraph: {
    title: "Projects | Michael Anokam",
    description: "Showcasing my work: personal, client, and open-source projects.",
    url: "https://michaelanokam.vercel.app/projects",
    images: [{ url: "/projects-og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Michael Anokam",
    description: "All my projects in one place.",
    images: ["/projects-og.png"],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}