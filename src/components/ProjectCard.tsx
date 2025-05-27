import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-md">
      <CardHeader className="p-0">
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-bold mb-2">
          {project.title}
        </CardTitle>
        <CardDescription className="mt-2 line-clamp-3 text-muted-foreground">
          {project.description}
        </CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button variant="default" asChild>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full justify-center"
          >
            Voir le projet
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
