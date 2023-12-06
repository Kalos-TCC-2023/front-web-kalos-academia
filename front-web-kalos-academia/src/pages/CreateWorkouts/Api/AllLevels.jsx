export const GetAllLevels = () => {
  const endPointAzure = localStorage.getItem("end-point-azure")

    return fetch(`${endPointAzure}/kalos/nivel`)
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
  