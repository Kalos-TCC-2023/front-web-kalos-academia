export const loadRegistererStudents = () => {
    const idAcademia = localStorage.getItem("id_academia");
    const idAlunoRegistrado = localStorage.getItem("id_treino_Categoria")
    return fetch(`http://10.107.144.2:8080/kalos/treinoNivelCategoria/idAcademia/${idAcademia}/idTreinoNivelCategoria/${idAlunoRegistrado}`)
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
  ``