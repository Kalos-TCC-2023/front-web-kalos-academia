export const ApiDetailsWorkout = () => {
    const id = localStorage.getItem("id_treino");
    const endPointAzure = localStorage.getItem("end-point-azure")

    console.log(id);
    return fetch(`${endPointAzure}/kalos/treinoNivelCategoria/id/${id}`)
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