import Publications from '../Publications';

export default function PublicationsExample() {
  const publications = [
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

  return <Publications publications={publications} />;
}