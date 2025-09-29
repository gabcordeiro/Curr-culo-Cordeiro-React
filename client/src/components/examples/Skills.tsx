import Skills from '../Skills';

export default function SkillsExample() {
  const skillCategories = [
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

  return <Skills skillCategories={skillCategories} />;
}