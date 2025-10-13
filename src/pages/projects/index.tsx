import { Dropdown, ProjectPreview } from "@/components";
import Layout from "@/components/Layout";
import { useState, useEffect, useRef } from "react";
import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Project } from "@/interfaces/ProjectInterface";

interface ProjectsPageProps {
  projects: Omit<Project, "content">[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(0, (prev || 0) - 1));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        Math.min(projects.length - 1, (prev || 0) + 1)
      );
    }
  };

  return (
    <Layout currentPage="projects">
      {/* will use it later */}
      {/* <div className="flex gap-2 items-center py-3">
          <span>Sort:</span>
          <Dropdown
            onSelect={() => {}}
            options={[
              { label: "Date", value: "Date" },
              { label: "Name", value: "Name" },
              { label: "Location", value: "Location" },
            ]}
            selectedValue="Date"
            buttonTextColor="text-muted"
          />
        </div> */}

      <div className="flex gap-4 items-start pt-3">
        <div
          className="w-full h-full grid grid-rows-[auto_1fr] outline-none"
          ref={containerRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] border-b dark:border-white border-black">
            <div className="pb-2 font-medium">Project name</div>
            <div className="pb-2 font-medium hidden sm:grid">Technology</div>
          </div>

          <div className="overflow-y-auto pt-1">
            {projects.map((project, index) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div
                  className={`py-1 grid grid-cols-1 sm:grid-cols-[2fr_1fr] cursor-pointer transition-colors hover:bg-secondary-background active:bg-secondary-background ${
                    selectedIndex === index ? "bg-secondary-background" : ""
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="">{project.name}</div>
                  <div className="text-muted hidden sm:block">
                    {project.tech}
                  </div>
                </div>
              </Link>
            ))}
            {Array.from({ length: 10 }, (_, index) => (
              <div
                key={`empty-${index}`}
                className="py-1 grid grid-cols-1 sm:grid-cols-[2fr_1fr]"
              >
                <div className="">~</div>
              </div>
            ))}
          </div>
        </div>
        <ProjectPreview project={projects[selectedIndex]} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projectsDirectory = path.join(process.cwd(), "content/projects");
  const filenames = fs.readdirSync(projectsDirectory);

  const projects = filenames
    .filter((name) => name.endsWith(".md"))
    .map((name) => {
      const fullPath = path.join(projectsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        id: data.id,
        date: data.date,
        name: data.name,
        tech: data.tech,
        description: data.description,
        image: data.image,
        githubUrl: data.githubUrl,
        liveUrl: data.liveUrl,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    props: {
      projects,
    },
  };
};
