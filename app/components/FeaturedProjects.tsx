import React from "react";
import { featuredProjects } from "../config/settings";
import ProjectTag from "./ProjectTag";
import Image from "next/image";

export default function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {featuredProjects.map((project) => (
        <Project data={project} key={project.name} />
      ))}
    </div>
  );
}

export function Project({ data: project }: { data: any }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 pt-6 h-full">
        <div className="flex flex-col h-full">
          <a
            className="font-semibold text-primary hover:underline"
            href="#"
          >
            {project.name}
          </a>
          <p className="text-sm text-muted-foreground mt-1 mb-4">
            {project.description}
          </p>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {project.tags.map((tag: string, key: number) => (
                <ProjectTag key={key} name={tag} />
              ))}
            </div>
            <a target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
              href={project.github || "#"}
            >
              View Project
              <Image
                src="viewSource.svg"
                alt="View Source"
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
