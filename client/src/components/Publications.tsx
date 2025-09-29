import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

export interface PublicationItem {
  id: string;
  title: string;
  venue: string;
  year: string;
  url: string;
}

interface PublicationsProps {
  publications: PublicationItem[];
}

export default function Publications({ publications }: PublicationsProps) {
  return (
    <Card className="hover-elevate" data-testid="publications-section">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Artigos Publicados</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {publications.map((pub, index) => (
          <div key={pub.id} className="flex gap-4 p-4 bg-muted/30 rounded-md" data-testid={`publication-item-${index}`}>
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
            </div>
            
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground leading-tight" data-testid={`text-pub-title-${index}`}>
                  {pub.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-pub-venue-${index}`}>
                  {pub.venue} • {pub.year}
                </p>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                data-testid={`link-pub-${index}`}
              >
                <a href={pub.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Artigo
                </a>
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}