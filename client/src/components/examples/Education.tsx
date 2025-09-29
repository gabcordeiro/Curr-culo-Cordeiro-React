import Education from '../Education';

export default function EducationExample() {
  const education = [
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

  return <Education education={education} />;
}