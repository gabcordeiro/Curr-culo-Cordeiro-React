import Experience from '../Experience';

export default function ExperienceExample() {
  const experiences = [
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
      technologies: ['Flutter', 'Firebase', 'Mobile Development']
    }
  ];

  return <Experience experiences={experiences} />;
}