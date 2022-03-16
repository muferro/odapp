let patients = [
    {
        id: 1,
        name: "Robson Daniel Alves",
        idade: 13,
        dataCadastro: "01/02/2019",
        cidade: "João Pessoa",
        estado: "Paraiba"
    },
    {
      id: 2,
      name: "Giordana Ferraz",
      idade: 9,
      dataCadastro: "03/07/2014",
      cidade: "Brasília",
      estado: "Distrito Federal"
    },
    {
        id: 3,
        name: "Edivaldo nunes",
        idade: 15,
        dataCadastro: "09/03/2010",
        cidade: "São Carlos",
        estado: "São Paulo"
    },
    {
        id: 4,
        name: "Mirelo Linderberg",
        idade: 11,
        dataCadastro: "05/01/2019",
        cidade: "Jundiai",
        estado: "São Paulo"
    },
  ];
  
  export function getPatients() {
    return patients;
  }
  
  export function getPatient(id) {
    return patients.find(
      (patients) => patients.id === id
    );
  }