export const SearchExercise = (exerciseName) => {
    const id = localStorage.getItem("id_academia");

    return fetch(`https://kaloscorp.cyclic.app/kalos/exercicio/nome/${exerciseName}/idAcademia/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação de dados');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  