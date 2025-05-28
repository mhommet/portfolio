import React from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  skills: Record<string, string[]>;
}

const SkillBadges: React.FC<Props> = ({ skills }) => {
  return (
    <div className="space-y-6">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="space-y-3">
          <h3 className="font-semibold text-lg">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <Badge
                key={skill}
                className="bg-primary/10 text-primary hover:bg-primary/20 transition-all"
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
