import React from "react";
import { Badge } from "@/components/ui/badge";

interface SkillBadgesProps {
  skills: Record<string, string[]>;
}

const SkillBadges: React.FC<SkillBadgesProps> = ({ skills }) => {
  return (
    <div className="mx-auto max-w-5xl">
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-10 last:mb-0">
          <h3 className="mb-5 text-xl font-bold">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {skillList.map((skill, index) => (
              <Badge
                key={index}
                className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                variant="outline"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBadges;
