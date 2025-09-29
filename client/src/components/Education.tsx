import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, GraduationCap } from "lucide-react";

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  description?: string;
  status: string;
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <Card className="hover-elevate" data-testid="education-section">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Formação</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu, index) => (
          <div key={edu.id} className="flex gap-4" data-testid={`education-item-${index}`}>
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
            </div>
            
            <div className="flex-1 space-y-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground" data-testid={`text-degree-${index}`}>
                  {edu.degree}
                </h3>
                <p className="text-lg text-primary font-medium" data-testid={`text-institution-${index}`}>
                  {edu.institution}
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span data-testid={`text-dates-${index}`}>
                    {edu.startYear} - {edu.endYear}
                  </span>
                </div>
                <span className="text-green-600 font-medium" data-testid={`text-status-${index}`}>
                  ({edu.status})
                </span>
              </div>
              
              {edu.description && (
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-description-${index}`}>
                  {edu.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}