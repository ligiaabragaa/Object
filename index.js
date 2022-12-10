let objDevInHouse= {
    plataforma: "DevInHouse",
    cursos: {
      dados: ["SQL"],
      backend: ["Java", "Spring"],
      frontend: ["Javascript", "React"]
  },
     objUser : {
      nome: ["Ligia"],
      idade:[38],
      cidade: ["Florianopolis"]
  }
  };
  objDevInHouse.objUser.nome[0]= "Ligia Daniela Melo Braga";
  objDevInHouse.objUser.idade[0]= "38";
  console.table(objDevInHouse)
