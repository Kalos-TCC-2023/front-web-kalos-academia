export const SearchWorkout = (WorkoutName) => {
    const id = localStorage.getItem("id_academia");
const endPointAzure = localStorage.getItem("end-point-azure")

    return fetch(`${endPointAzure}/kalos/treinoNivelCategoria/nome/${WorkoutName}/idAcademia/${id}`)
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
  