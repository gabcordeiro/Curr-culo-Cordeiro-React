import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies?: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <Card className="hover-elevate" data-testid="experience-section">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Experiência Profissional</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative" data-testid={`experience-item-${index}`}>
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-px bg-border" />
            )}
            
            <div className="flex gap-4">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-3 h-3 bg-primary rounded-full mt-2" />
              
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`text-position-${index}`}>
                    {exp.position}
                  </h3>
                  <p className="text-lg text-primary font-medium" data-testid={`text-company-${index}`}>
                    {exp.company}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span data-testid={`text-dates-${index}`}>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span data-testid={`text-location-${index}`}>{exp.location}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-description-${index}`}>
                  {exp.description}
                </p>
                
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" data-testid={`badge-tech-${index}-${techIndex}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}