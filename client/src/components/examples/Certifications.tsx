import Certifications from '../Certifications';

export default function CertificationsExample() {
  const certifications = [
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

  return <Certifications certifications={certifications} />;
}