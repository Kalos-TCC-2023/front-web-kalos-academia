export const loadAllWorkouts = () => {

    const id = localStorage.getItem("id_academia");

        const endPointAzure = localStorage.getItem("end-point-azure")

        console.log(`${endPointAzure}/kalos/treinoNivelCategoria/idAcademia/${id}`);
    return fetch(`${endPointAzure}/kalos/treinoNivelCategoria/idAcademia/${id}`)
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