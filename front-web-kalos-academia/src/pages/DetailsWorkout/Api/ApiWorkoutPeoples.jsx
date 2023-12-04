export const ApiWokoutPeoples = () => {
    const idAcademia = localStorage.getItem("id_academia");
    const idTreino = localStorage.getItem("id_treino");

    const idAlunoRegistrado = localStorage.getItem("id_treino_categoria")
    return fetch(`https://kaloscorp.cyclic.app/kalos/treinoNivelCategoria/idAcademia/${idAcademia}/idTreinoNivelCategoria/${idTreino}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação de dados');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data; // Você pode retornar os dados se quiser
      })
      .catch((error) => {
        console.error(error);
      });
  };
  