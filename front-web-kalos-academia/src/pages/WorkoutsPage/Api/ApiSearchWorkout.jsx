export const SearchWorkout = (WorkoutName) => {
    const id = localStorage.getItem("id_academia");

    return fetch(`https://kaloscorp.cyclic.app/kalos/treinoNivelCategoria/nome/${WorkoutName}/idAcademia/${id}`)
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