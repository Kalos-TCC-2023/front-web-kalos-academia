export const ApiDetailsWorkout = () => {
    const id = localStorage.getItem("id_treino");
    console.log(id);
    return fetch(`https://kaloscorp.cyclic.app/kalos/treinoNivelCategoria/id/${id}`)
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