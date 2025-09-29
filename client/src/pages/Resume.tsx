import Header from '@/components/Header';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Publications from '@/components/Publications';
import ThemeToggle from '@/components/ThemeToggle';
import type { ExperienceItem } from '@/components/Experience';
import type { SkillCategory } from '@/components/Skills';
import type { EducationItem } from '@/components/Education';
import type { CertificationItem } from '@/components/Certifications';
import type { PublicationItem } from '@/components/Publications';

export default function Resume() {
  // Gabriel's real data from CV - todo: remove mock data when building full app
  const experiences: ExperienceItem[] = [
    {
      id: '1',
      company: 'VALE - UVV',
      position: 'Desenvolvedor de Realidade Virtual',
      location: 'Vila Velha, ES',
      startDate: '2021',
      endDate: '2025',
      description: 'Desenvolvimento de processos em Realidade Virtual, utilizando C#, para treinamentos voltados a atividades de risco.',
      technologies: ['C#', 'Unity3D', 'Realidade Virtual']
    },
    {
      id: '2',
      company: 'Jade Autistic',
      position: 'Desenvolvedor Flutter',
      startDate: '01/24',
      endDate: '08/24',
      description: 'Criação de aplicações mobile em Flutter e frameworks como Firebase, com foco em acessibilidade e experiência do usuário.',
      technologies: ['Flutter', 'Firebase', 'Mobile Development', 'Acessibilidade']
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      id: '1',
      category: 'Linguagens de Programação',
      skills: ['C#', 'Java', 'SQL', 'Python', 'JavaScript', 'ABAP']
    },
    {
      id: '2',
      category: 'Frameworks',
      skills: ['.NET', 'React Native', 'Angular', 'Unity3D', 'Flutter']
    },
    {
      id: '3',
      category: 'Tecnologias',
      skills: ['SAP S/4HANA', 'Tailwind CSS', 'Redes Neurais', 'YOLO v9', 'FlutterFlow']
    },
    {
      id: '4',
      category: 'Ferramentas de Design',
      skills: ['Kit Adobe', 'Blender']
    },
    {
      id: '5',
      category: 'Banco de Dados',
      skills: ['Firebase', 'PostgreSQL', 'Supabase']
    }
  ];

  const education: EducationItem[] = [
    {
      id: '1',
      degree: 'Ciência da Computação',
      institution: 'Universidade Vila Velha (UVV)',
      startYear: '2019',
      endYear: '2024',
      status: 'concluído',
      description: 'Foco em desenvolvimento de software e sistemas distribuídos. Principais disciplinas incluem Estruturas de Dados, Programação Orientada a Objetos, Banco de Dados, Engenharia de Software, e Padrões de desenvolvimento.'
    }
  ];

  const certifications: CertificationItem[] = [
    {
      id: '1',
      title: 'React Native: Desenvolva APPs Nativas para Android e iOS',
      issuer: 'Udemy',
      year: '2024',
      url: 'https://www.udemy.com/certificate/UC-fe6669fa-71df-4273-a006-5ae0f4118b51/'
    },
    {
      id: '2',
      title: 'Scrum Fundamentals Certified',
      issuer: 'SCRUMstudy',
      year: '2024',
      url: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-GabrielCordeiroDeCarvalho-1092249.pdf'
    },
    {
      id: '3',
      title: 'Curso de Postman API',
      issuer: 'Workover',
      year: '2024',
      url: 'https://workover.com.br/certificados/cursos/d4cf0633c09d8ba832e7236bd09a7698/validador'
    },
    {
      id: '4',
      title: 'Certificado de C# e MySQL',
      issuer: 'Workover',
      year: '2024',
      url: 'https://workover.com.br/cursos/1865/certificados/0e2a4f933e529d8cb544246d4f6d66bc'
    }
  ];

  const publications: PublicationItem[] = [
    {
      id: '1',
      title: 'Optimizing Industrial Processes through Digital Twin Simulation in a Didactic Manufacturing Plant',
      venue: "SVR '23: Proceedings of the 25th Symposium on Virtual and Augmented Reality",
      year: '2023',
      url: 'https://dl.acm.org/doi/10.1145/3625008.3625015/'
    },
    {
      id: '2',
      title: 'VREnergy: A simulator for critical operating procedures in electrical substations with evaluation process',
      venue: "SVR '24: Proceedings of the 26th Symposium on Virtual and Augmented Reality",
      year: '2024',
      url: 'https://dl.acm.org/doi/10.1145/3691573.3691601'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="resume-page">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-4xl">
        {/* Header Section */}
        <Header 
          name="Gabriel Cordeiro de Carvalho"
          title="Desenvolvedor Full Stack"
          location="Vila Velha, ES"
          phone="+55 (27) 99312-2222"
          email="gcordeirocarvalho97@gmail.com"
          githubUrl="https://github.com/gabcordeiro"
          linkedinUrl="https://www.linkedin.com/in/gabriel-cordeiro-a2a1351bb/"
        />

        {/* Professional Summary */}
        <ProfessionalSummary 
          summary="Desenvolvedor com experiência em projetos Mobile e Web, atuando com Scrum e metodologias ágeis. Especialidade nas linguagens C#, Java, Python, e frameworks .NET, Angular, React, Unity e bancos de dados SQL, focado em desenvolver projetos."
        />

        {/* Experience */}
        <Experience experiences={experiences} />

        {/* Skills */}
        <Skills skillCategories={skillCategories} />

        {/* Education */}
        <Education education={education} />

        {/* Certifications */}
        <Certifications certifications={certifications} />

        {/* Publications */}
        <Publications publications={publications} />

        {/* Footer */}
        <div className="text-center py-8 text-muted-foreground border-t">
          <p>© 2024 Gabriel Cordeiro de Carvalho. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}