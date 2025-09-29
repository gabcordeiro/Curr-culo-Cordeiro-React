import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  url: string;
}

interface CertificationsProps {
  certifications: CertificationItem[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <Card className="hover-elevate" data-testid="certifications-section">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Certificações</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={cert.id} className="flex gap-4 p-4 bg-muted/30 rounded-md" data-testid={`certification-item-${index}`}>
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
            </div>
            
            <div className="flex-1 space-y-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground" data-testid={`text-cert-title-${index}`}>
                  {cert.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-cert-issuer-${index}`}>
                  {cert.issuer} • {cert.year}
                </p>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                data-testid={`link-cert-${index}`}
              >
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Certificado
                </a>
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}