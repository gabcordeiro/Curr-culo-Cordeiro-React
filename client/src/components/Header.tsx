import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import headerImage from "@assets/generated_images/Professional_developer_headshot_a4dd1528.png";

interface HeaderProps {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export default function Header({
  name,
  title,
  location,
  phone,
  email,
  githubUrl,
  linkedinUrl,
}: HeaderProps) {
  const handleDownloadCV = () => {
    console.log("Download CV triggered"); //todo: remove mock functionality
  };

  return (
    <Card className="p-8 hover-elevate" data-testid="header-section">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Avatar className="w-32 h-32">
            <AvatarImage src={headerImage} alt={name} />
            <AvatarFallback className="text-2xl font-semibold">
              {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name and Title */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2" data-testid="text-name">
              {name}
            </h1>
            <p className="text-xl text-muted-foreground font-medium" data-testid="text-title">
              {title}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center md:items-start gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span data-testid="text-location">{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span data-testid="text-phone">{phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a 
                href={`mailto:${email}`} 
                className="text-primary hover:underline" 
                data-testid="link-email"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Social Links and Actions */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                data-testid="link-github"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                data-testid="link-linkedin"
              >
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleDownloadCV}
              data-testid="button-download"
            >
              <Download className="w-4 h-4 mr-2" />
              Baixar Currículo
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}