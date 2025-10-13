import Image from "next/image";
import React from "react";
import { Project } from "@/interfaces/ProjectInterface";
import Link from "next/link";
import DropdownIcon from "../../public/icons/dropdown.svg";

interface ProjectPreviewProps {
  project: Omit<Project, "content">;
}

const ProjectPreview = ({ project }: ProjectPreviewProps) => {
  return (
    <div className="w-full h-full basis-1/3 bg-menu-background border border-solid dark:border-white border-black hidden md:flex flex-col gap-4 p-4">
      <h2 className="text-header"># {project.name}</h2>
      <Image
        src={project.image}
        alt={`${project.name} Screenshot`}
        fill
        className="!relative w-full h-full object-contain aspect-video"
      />
      <p className="text-sm">{project.description}</p>
      <Link
        href={`/projects/${project.id}`}
        className="flex items-center gap-1 hover:underline"
      >
        <p className="text-link">See Details</p>
        <DropdownIcon className="-rotate-90 w-4 h-4" />
      </Link>
    </div>
  );
};

export default ProjectPreview;
