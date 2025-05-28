import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Card className="overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-primary/5">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            GitHub →
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
