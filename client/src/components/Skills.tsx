import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export default function Skills({ skillCategories }: SkillsProps) {
  return (
    <Card className="hover-elevate" data-testid="skills-section">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Habilidades</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={category.id} className="space-y-3" data-testid={`skill-category-${index}`}>
            <h3 className="text-lg font-medium text-foreground" data-testid={`text-category-${index}`}>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge 
                  key={skillIndex} 
                  variant="secondary" 
                  data-testid={`badge-skill-${index}-${skillIndex}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}